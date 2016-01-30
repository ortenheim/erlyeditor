import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';

export default (history, store) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
);
