import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import Html from 'server/templates/html';
import loadAssets from 'server/utils/loadAssets';

const assets = loadAssets();
const { renderToString } = ReactDOMServer;

export default (store, routerProps) => {
  const root = (
    <Provider store={store}>
      <RouterContext {...routerProps} />
    </Provider>
  );

  const props = {
    body: renderToString(root),
    state: store.getState(),
    assets
  };

  const html = <Html {...props } />;
  const content = renderToString(html);

  return `<!doctype html>\n${content}`;
};
