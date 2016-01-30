import { Route, IndexRoute } from 'react-router';

import * as layouts from 'layouts';
import * as pages from 'pages';

export default (
  <Route path='/' component={layouts.base}>
    <IndexRoute component={pages.demo} />
    <Route path='*' component={pages.notFound} status={404} />
  </Route>
);
