import React from 'react'
import {render} from 'react-dom'
import App from './App'
import '../stylesheets/index.scss'
import { Provider } from 'react-redux'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-container')
)
