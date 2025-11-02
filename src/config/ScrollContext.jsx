import { Children, createContext, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    
  const [id, setId] = useState("#home");
  // console.log("iddddd", id);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <ScrollContext.Provider value={{ id, setId , scrollToSection}}>
      {children}
    </ScrollContext.Provider>
  );
};
