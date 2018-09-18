import React from 'react'
import 'core-js';
import { Provider, configureStore }  from 'airlytics';
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheet = new ServerStyleSheet();
  let store;
  if (process.env.NODE_ENV === "production") {
    store = configureStore({
    });
  } else {
    store = configureStore({
    });
  }
  const body = sheet.collectStyles(bodyComponent);

  const ConnectedBody = () => (
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        {body}
      </StyleSheetManager>
    </Provider>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody/>))
  setHeadComponents([sheet.getStyleElement()])
}
