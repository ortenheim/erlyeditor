import PrettyError from 'pretty-error';
import Qs from 'qs';
import { match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import { routeActions } from 'react-router-redux';

import createStore from 'store/create';
import history from 'lib/history';
import render from 'lib/render';

import routes from 'routes';
import getStatus from 'routes/utils/getStatus';

const prettyError = new PrettyError();

const runRouter = (routes, location) => new Promise((resolve) =>
  match({ routes, location }, (...args) => resolve(args)));

export default async (req, res) => {
  try {
    const location = createLocation(req.originalUrl);

    const initialState = {};
    const store = createStore(history, initialState);
    const [error, redirectLocation, renderProps] = await runRouter(routes, location);

    if (error) {
      res.status(500).send(error.stack);
    } else if (redirectLocation) {
      if (redirectLocation.state && redirectLocation.state.attempted) {
        const query = Qs.parse(redirectLocation.search);
        query.attempted = redirectLocation.state.attempted;
        const newQuery = Qs.stringify(query);
        redirectLocation.search = `?${newQuery}`;
      }
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const query = Qs.parse(location.search.slice(1));
      const routingState = query.attempted && { attempted: query.attempted };

      // doesn't matter, routing state will be overwritten anyways,
      // see https://github.com/rackt/react-router-redux/issues/122
      store.dispatch(routeActions.replace(location.pathname, routingState));

      const status = getStatus(renderProps.routes, 200);

      console.info(`
           location = ${location.pathname},
           original url = ${req.originalUrl},
           status = ${status}
      `);

      try {
        const routerProps = { ...renderProps, location };
        const html = await render(history, store, routerProps);
        res.status(status).send(html);
      } catch (err) {
        res.status(500).send(err.stack);
      }
    } else {
      res.status(404).send('not found');
    }
  } catch (err) {
    console.error(prettyError.render(err));
    res.status(500).end();
  }
};
