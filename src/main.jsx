import React from 'react'
import ReactDOM from 'react-dom/client'
import { SaintSeiyaApp } from './SaintSeiyaApp'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <SaintSeiyaApp/>
    </HashRouter>
  </React.StrictMode>,
)
