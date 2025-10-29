import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import TextComponent from "../textComponent/TextComponent";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const navItems = [
    { id: 1, key: "#icon", name: "<Mohid Hamdani/>" },
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
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.key}
            onClick={() => setActiveNav(item?.key)}
          style={{textDecoration: "none"}}
          >
            <TextComponent text={item?.name} 
              className={`${styles.navItem} ${
              activeNav === item.key ? styles.active : styles.navText
            }`}/>
          </a>
        ))}
      </span>
    </div>
  );
};

export default Navbar;
