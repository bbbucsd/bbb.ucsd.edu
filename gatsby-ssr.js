import React from 'react'
import { Provider, configureStore }  from 'airlytics';
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const sheet = new ServerStyleSheet();
  const store = configureStore();
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
