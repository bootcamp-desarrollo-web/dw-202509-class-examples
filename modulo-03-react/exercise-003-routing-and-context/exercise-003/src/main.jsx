import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'
import User from './pages/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        // Ruta tipo index es activa cuando la url es la url del padre. 
        index: true,
        // Otra posibilidad es usar path vacío para que la url de esta ruta sea idéntico al del padre
        // path: '',
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'user/:userId',
            element: <User />
          }
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
