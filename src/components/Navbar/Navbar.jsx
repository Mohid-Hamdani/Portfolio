import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import TextComponent from "../textComponent/TextComponent";
import { ScrollContext } from "../../config/ScrollContext";
import { LuCloudSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "../../config/ThemeContext";

const Navbar = () => {
  const { setId, scrollToSection } = useContext(ScrollContext);
  const [activeNav, setActiveNav] = useState("#home");
  const { theme, setTheme } = useContext(ThemeContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 2, key: "#home", name: "Home" },
    { id: 3, key: "#skills", name: "Skills" },
    { id: 4, key: "#projects", name: "Projects" },
    { id: 5, key: "#experience", name: "Experience" },
  ];

  const handleNavClick = (item) => {
    setActiveNav(item.key);
    setId(item.key);
    scrollToSection(item.key);
    setIsSidebarOpen(false); // Close sidebar on mobile after clicking
  };

  // Prevent body scroll when sidebar is open
  React.useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className={styles.mainCont}>
        <span className={styles.navDiv}>
          <TextComponent
            text={"<Mohid Hamdani/>"}
            style={{ color: "var(--text-color)" }}
          />
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.key}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                style={{ textDecoration: "none" }}
              >
                <TextComponent
                  text={item?.name}
                  className={`${styles.navItem} ${
                    activeNav === item.key ? styles.active : styles.navText
                  }`}
                />
              </a>
            ))}
          </div>
          <div className={styles.themeToggle}>
            {theme === "dark" ? (
              <LuCloudSun
                style={{ color: "var(--text-color)", cursor: "pointer" }}
                size={20}
                onClick={() => setTheme("light")}
              />
            ) : (
              <IoMoonOutline
                style={{ color: "var(--text-color)", cursor: "pointer" }}
                size={20}
                onClick={() => setTheme("dark")}
              />
            )}
          </div>
          <HiMenuAlt3
            className={styles.hamburger}
            size={24}
            onClick={() => setIsSidebarOpen(true)}
            style={{ color: "var(--text-color)", cursor: "pointer" }}
          />
        </span>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
      >
        <div className={styles.sidebarHeader}>
          <TextComponent
            text={"<Mohid Hamdani/>"}
            style={{ color: "var(--text-color)" }}
          />
          <IoClose
            size={28}
            onClick={() => setIsSidebarOpen(false)}
            style={{ color: "var(--text-color)", cursor: "pointer" }}
          />
        </div>
        <div className={styles.sidebarNav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.key}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}
              style={{ textDecoration: "none" }}
            >
              <TextComponent
                text={item?.name}
                className={`${styles.navItem} ${
                  activeNav === item.key ? styles.active : styles.navText
                }`}
              />
            </a>
          ))}
               <div className={styles.sidebarFooter}>
          {theme === "dark" ? (
            <LuCloudSun
              style={{ color: "var(--text-color)", cursor: "pointer" }}
              size={20}
              onClick={() => setTheme("light")}
            />
          ) : (
            <IoMoonOutline
              style={{ color: "var(--text-color)", cursor: "pointer" }}
              size={20}
              onClick={() => setTheme("dark")}
            />
          )}
        </div>
        </div>
   
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;