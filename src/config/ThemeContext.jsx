import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const themes = {
    dark: {
      "--primary-color": "linear-gradient(to right, #0f172a 20%, #1e1b4b 80%)",
      "--secondary-color": "#FFD43B",
      "--sub-secondary-color": "#747070",
      // "--navText-color": "#C7B8B8",
      "--navText-shadow":
        "0 0 10px #ffd43b, 0 0 20px #ffd43b, 0 0 30px #ffd43b",

      "--bg-color": "#0f172a",
      "--text-color": "#ffffff",
      "--btn-color": "#000000",
      "--card-color": "linear-gradient(145deg, #1f1f1f, #2a2a2a)",
    },
    light: {
      "--primary-color": "linear-gradient(to right, #ffffff 20%, #e0e7ff 80%)",
      "--secondary-color": "#4B0082",
      "--sub-secondary-color": "#e9e7e7ff",
      // "--navText-color": "#000000",
      "--navText-shadow": "0 0 5px #1e1b4b, 0 0 10px #1e1b4b, 0 0 15px #1e1b4b",
      "--bg-color": "#ffffff",
      "--text-color": "#000000",
      "--btn-color": "#ffffff",
      "--card-color": "linear-gradient(145deg, #ffffff , #e0e7ff)",

    },
  };

  //   console.log("stateeeeeeeeeeee", theme);

  useEffect(() => {
    const root = document.documentElement;

    // Add fade animation
    root.classList.add("theme-fade");
    const currentTheme = themes[theme];
    if (currentTheme) {
      Object.entries(currentTheme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
      localStorage.setItem("theme", theme);
    }
    const timeout = setTimeout(() => {
      root.classList.remove("theme-fade");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
