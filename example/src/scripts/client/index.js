import FastClick from 'fastclick';
import { Provider } from 'react-redux';
import createStore from 'store/create';

import history from 'lib/history';
import render from 'lib/render';

function run() {
  const initialState = window.__state || {};
  const store = createStore(history, initialState);

  const container = window.document.getElementById('root');
  const component = render(history, store);

  // make taps on links and buttons work fast on mobiles
  FastClick.attach(document.body);

  ReactDOM.render(component, container);

  if (!__PRODUCTION__) {
    window.React = React;

    if (__DEVELOPMENT__ && __CLIENT__) {
      window.appDebug = require('debug');
      window.appDebug.enable('app:*');
    }

    if (__PROFILE__) {
      // see https://facebook.github.io/react/docs/perf.html
      window.Perf = require('react-addons-perf');
      window.Perf.start();
    }

    const failed =
      !container ||
      !container.firstChild ||
      !container.firstChild.attributes ||
      !container.firstChild.attributes['data-react-checksum'];

    if (failed) {
      console.error(
        `Server-side React render was discarded, investigate, good luck.`
      );
    }

    if (__DEVTOOLS__ && !window.devToolsExtension) {
      const DevTools = require('components/DevTOols');

      ReactDOM.render(
        <Provider store={store} key='provider'>
          <div>{component}<DevTools /></div>
        </Provider>,
        container
      );
    }
  }
}

// run the application when both:
// - DOM is ready
// - page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
