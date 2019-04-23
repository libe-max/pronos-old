import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import config from './config'
import 'whatwg-fetch'
import Pronos from './Pronos'

ReactDOM.render(
  <Pronos {...config} />,
  document.getElementById('libe-labo-app-wrapper')
)

serviceWorker.unregister()
