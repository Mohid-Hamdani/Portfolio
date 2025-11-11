import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import CustomCursor from "./components/customCursor/CustomCursor";
import { CursorProvider } from "./config/CursorContext";
import { ScrollProvider } from "./config/ScrollContext";
import { ThemeProvider } from "./config/ThemeContext";
import Mainpage from "./pages/Mainpage/Mainpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainpage />,
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
