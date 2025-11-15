import React, { useRef } from "react";
import TextComponent from "../textComponent/TextComponent";
import styles from "./card.module.css";
import { FaAndroid, FaApple, FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ title, category, img, androidLink, webLink, iosLink }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 15).toFixed(2);
    const rotateY = ((centerX - x) / 15).toFixed(2);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      className={styles.card}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <TextComponent text={title} className={styles.title} />
        <TextComponent text={category} className={styles.description} />
        <div className={styles.buttons}>
          {androidLink && (
            <div onClick={() => openInNewTab(androidLink)}>
              <FaAndroid  className={styles.svg} />
              <TextComponent style={{ marginLeft: 5 }} text="Playstore" className={styles.buttonText} />

              {/* <span style={{ marginLeft: 5 }}> Playstore</span> */}
            </div>
          )}
          {iosLink && (
            <div onClick={() => openInNewTab(iosLink)}>
              <FaApple  className={styles.svg} />
              <TextComponent style={{ marginLeft: 5 }} text="Appstore" className={styles.buttonText} />

              {/* <span style={{ marginLeft: 5 }}> Appstore</span> */}
            </div>
          )}
          {webLink && (
            <div onClick={() => openInNewTab(webLink)}>
              <FaExternalLinkAlt  className={styles.svg} />
              <TextComponent style={{ marginLeft: 5 }} text="Web URL" className={styles.buttonText} />

              {/* <span style={{ marginLeft: 5 }}> </span> */}
            </div>
          )}
        </div>
        {/* <div className={styles.buttons}>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <TextComponent text="Live Demo" className={styles.buttonText} />
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <TextComponent text="GitHub" className={styles.buttonText} />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
