import React from 'react'
import {render} from 'react-dom'
import App from './App'
import '../stylesheets/index.scss'

window.React = React

render(
  <App />,
  document.getElementById('react-container')
)
