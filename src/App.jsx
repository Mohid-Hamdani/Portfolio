import { React } from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage/MainPage';

function App() {
  const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },
]);

  return (
  <RouterProvider router={router} />
  )
}

export default App
