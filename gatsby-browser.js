import React from 'react';
import { Router } from 'react-router-dom'
import { Provider, configureStore }  from 'airlytics';

const store = configureStore()

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