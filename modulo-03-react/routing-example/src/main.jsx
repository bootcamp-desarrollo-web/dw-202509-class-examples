import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Members from './pages/Members.jsx'
import Users from './pages/Users.jsx'
import UserInfo from './pages/UserInfo.jsx'

const routerMap = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'members/:id',
            element: <Members />
          },
        ]
      },
      {
        path: 'users',
        element: <Users />,
        children: [
          {
            path: ':userId',
            element: <UserInfo />
          }
        ]
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerMap} />
  </StrictMode>,
)
