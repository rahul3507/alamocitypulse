import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <RouterProvider router={router}/>
    </div>
  </StrictMode>,
)
