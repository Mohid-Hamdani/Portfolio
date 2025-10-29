import { React } from "react";
// import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CursorProvider } from "./config/CursorContext";
import CustomCursor from "./components/customCursor/CustomCursor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return (
    <CursorProvider>
       <CustomCursor /> 
      <RouterProvider router={router} />
    </CursorProvider>
  );
}

export default App;
