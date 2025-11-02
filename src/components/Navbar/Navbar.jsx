import React, { useContext, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import TextComponent from "../textComponent/TextComponent";
import { ScrollContext } from "../../config/ScrollContext";
import { LuCloudSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "../../config/ThemeContext";

const Navbar = () => {
  const { setId, scrollToSection } = useContext(ScrollContext);
  const [activeNav, setActiveNav] = useState("#home");
  const { theme, setTheme } = useContext(ThemeContext);

  const navItems = [
    // { id: 1, key: "", name: "<Mohid Hamdani/>" },
    { id: 2, key: "#home", name: "Home" },
    { id: 3, key: "#skills", name: "Skills" },
    { id: 4, key: "#projects", name: "Projects" },
    { id: 5, key: "#experience", name: "Experience" },
  ];

  //   useEffect(() => {
  //     const sections = document.querySelectorAll("section");

  //     const observerOptions = {
  //       threshold: 0.6,
  //     };

  //     const observer = new IntersectionObserver((entries) => {
  //         console.log("entriesssssss", entries);

  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveNav(`#${entry.target.id}`);
  //         }
  //       });
  //     }, observerOptions);

  //     sections.forEach((section) => observer.observe(section));

  //     return () => observer.disconnect();
  //   }, []);

  return (
    <div className={styles.mainCont}>
      <span className={styles.navDiv}>
        <TextComponent
          text={"<Mohid Hamdani/>"}
          style={{ color: "var(--light-text)" }}
        />
        <div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.key}
              onClick={(e) => {
                e.preventDefault(); // prevent page jump
                setActiveNav(item.key);
                setId(item.key);
                scrollToSection(item.key); // trigger smooth scroll
              }}
              style={{ textDecoration: "none" }}
            >
              <TextComponent
                text={item?.name}
                className={`${styles.navItem} ${
                  activeNav === item.key ? styles.active : styles.navText
                }`}
                // style={{color: activeNav == "#home" ? "var(--light-text)" : "var(--black-color)"}}
              />
            </a>
          ))}
        </div>
        {theme == "dark" ? (
          <LuCloudSun
            style={{ color: "var(--navText-color)", cursor: "pointer" }}
            size={20}
            onClick={() => {
              setTheme("light");
            }}
          />
        ) : (
          <IoMoonOutline
            style={{ color: "var(--navText-color)", cursor: "pointer" }}
            size={20}
            onClick={() => {
              setTheme("dark");
            }}
          />
        )}
      </span>
    </div>
  );
};

export default Navbar;
