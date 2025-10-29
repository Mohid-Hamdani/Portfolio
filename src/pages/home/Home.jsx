import React from "react";
import { Navbar, TextComponent } from "../../components";
import styles from "./Home.module.css";
// import profileImage from "../../assets/images/pf.jpg";
import profileImage from "../../assets/images/mine.png";
const Home = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.subCont}>
        <div className={styles.textCont}>
          <span className={styles.waveHand}>👋</span>
          <TextComponent
            className={styles.fadeText}
            style={{ color: "var(--secondary-color)" }}
            text={"Hello, "}
          >
            <text style={{ color: "var(--white-color)" }}>
              {
                "I’m Mohid —  React.js and React Native developer with 3+ experience."
              }
            </text>
          </TextComponent>
        </div>
        <div className={styles.imageCont}>
          <img src={profileImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
