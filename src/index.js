import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Root from './routes/root'
import './styles/root.css'
import Login from './routes/login'
import SingUP from './routes/signup'
import Profile from './routes/profile'
import './styles/profile.css'
import'./styles/loginSignup.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'profile',
    element: <Profile />
  },
  {
    path: 'signup',
    element: <SingUP />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
