import React from 'react'
import { Provider, configureStore }  from 'airlytics';
import { renderToString } from 'react-dom/server'


export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = configureStore()

  const ConnectedBody = () => (
    <Provider store={store}>
      {bodyComponent}
    </Provider>
  )
  replaceBodyHTMLString(renderToString(<ConnectedBody/>))
}
