import React  from 'react';
import { Provider, configureStore }  from 'airlytics';
import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';
import { anchorate } from 'anchorate';

let store;
let bugsnagClient;
let ErrorBoundary;
if (process.env.NODE_ENV === "production") {
  bugsnagClient = bugsnag('8a1895fea0bdc8faabc6b37430f7cbff');
  ErrorBoundary = bugsnagClient.use(createPlugin(React));
  store = configureStore({
  });
} else {
  store = configureStore({
  });
}

export const wrapRootElement = ({ element }) => {

  if (process.env.NODE_ENV === "production") {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          {element}
        </ErrorBoundary>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        {element}
      </Provider>
    );
  }
}

export const onRouteUpdate = () => {
  anchorate({
    scroller: function (element) {
      if (!element) return false
      element.scrollIntoView({ behavior: 'smooth' })
      return true
    }
  })
}
