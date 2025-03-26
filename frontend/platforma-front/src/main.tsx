import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import  Login  from './components/Login'
import Register from './components/Register.tsx'
import UserPage from './components/UserPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Login', element: <Login /> },
  { path: '/register', element: <Register />},
  { path: '/userpage', element: <UserPage />}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
