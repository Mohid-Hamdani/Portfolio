import { createContext, useState, useEffect } from "react";

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("default"); // "default", "hover"
        console.log("position", position);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // console.log("Mouse moving:", e.clientX, e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
    };


    // ✅ use window, not document.body or div
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      backgroundColor: "#FFD43B",
      scale: 1,
    },
    hover: {
      backgroundColor: "#FFC107",
      scale: 2,
    },
  };

  return (
    <CursorContext.Provider value={{ position, variant, setVariant, cursorVariants }}>
      {children}
    </CursorContext.Provider>
  );
};