// import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";
import CustomCursor from "./components/customCursor/CustomCursor";
import { CursorProvider } from "./config/CursorContext";
import { ScrollProvider } from "./config/ScrollContext";
import { ThemeProvider } from "./config/ThemeContext";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MainPage />,
  //   },
  // ]);

  return (
    <ThemeProvider>
      <CursorProvider>
        <ScrollProvider>
          <CustomCursor />
          <MainPage />
          {/* <RouterProvider router={router} /> */}
        </ScrollProvider>
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
