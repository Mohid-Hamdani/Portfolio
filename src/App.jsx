import { React } from "react";
// import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CursorProvider } from "./config/CursorContext";
import CustomCursor from "./components/customCursor/CustomCursor";
import { ScrollProvider } from "./config/ScrollContext";
import { ThemeProvider } from "./config/ThemeContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return (
    <ThemeProvider>
    <CursorProvider>
      <ScrollProvider>
       <CustomCursor /> 
      <RouterProvider router={router} />
      </ScrollProvider>
    </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
