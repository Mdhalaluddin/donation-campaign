import myCrateRouter from './Router/Router'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCrateRouter}></RouterProvider>
  </React.StrictMode>,
)
