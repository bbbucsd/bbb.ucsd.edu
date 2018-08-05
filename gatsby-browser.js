import React from 'react';
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider, configureStore }  from 'airlytics';

const store = configureStore()

export const onClientEntry = () => {
  console.log("We've started!")
}

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
}

export const onRouteUpdate = ({ location }) => {
  console.log('new pathname', location.pathname)
}

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    console.log("rendering!");
    ReactDOM.render(element, container, callback);
  };
};

export const replaceRouterComponent = ({ history }) => {

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}

export const shouldUpdateScroll = (args) => {
  var hadModal, isModal

  if (args.prevRouterProps &&
      args.prevRouterProps.location &&
      args.prevRouterProps.location.pathname &&
      args.prevRouterProps.location.pathname.match(/\/_/)) {
    hadModal = true
  }

  if (args.pathname.match(/\/_/)) {
    isModal = true
  }

  if (hadModal || isModal) {
    return false
  } else {
    return true
  }
}