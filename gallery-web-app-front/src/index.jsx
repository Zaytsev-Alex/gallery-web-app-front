import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './app.jsx'
import rootReducer from './rootReducer.jsx'

function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}

const store = configureStore()

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)