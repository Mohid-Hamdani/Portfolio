import React, { useContext } from "react";
import { Navbar, TextComponent } from "../../components";
import styles from "./Home.module.css";
import profileImage from "../../assets/images/mine.jpg";
import { ScrollContext } from "../../config/ScrollContext";
const Home = () => {
  
  const handleDownloadResume = () => {
    // Create a link to your resume file (you'll need to add your resume to the public folder or assets)
    const link = document.createElement('a');
    link.href = "../../../public/files/Mohid_Resume.pdf"; // Update this path to your resume location
    link.download = 'Mohid_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    // Smooth scroll to footer
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.mainCont}  id="#home">
      <div className={styles.subCont}>
        <div className={styles.textCont}>
          <span className={styles.waveHand}>👋</span>
          <TextComponent
            className={styles.fadeText}
            style={{ color: "var(--secondary-color)" }}
            text={"Hello, "}
          >
            <text style={{ color: "var(--text-color)" }}>
              {
                "I'm Mohid —  React.js and React Native developer with 3+ experience."
              }
            </text>
          </TextComponent>
          
          <div className={styles.buttonContainer}>
            <button className={styles.primaryBtn} onClick={handleDownloadResume}>
              Download Resume
            </button>
            <button className={styles.secondaryBtn} onClick={handleContactClick}>
              Contact Me
            </button>
          </div>
        </div>
        <div className={styles.imageCont}>
          <img src={profileImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;