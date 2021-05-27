import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Normalize from './styles/normalize'
import './styles/fonts.css'

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
