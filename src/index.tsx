
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from "./state/store"

import App from './App';

import './index.scss';
import "./styles/sidepanel.scss"
import "./styles/timeline.scss"
import "./styles/responsive.scss"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
