import React, { useRef } from "react";
import TextComponent from "../textComponent/TextComponent";
import styles from "./card.module.css";

const Card = ({ title, description, image, demoLink, githubLink }) => {
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
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <TextComponent text={title} className={styles.title} />
        <TextComponent text={description} className={styles.description} />
        <div className={styles.buttons}>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <TextComponent text="Live Demo" className={styles.buttonText} />
          </a>
          <a href={githubLink} target="_blank" rel="noreferrer">
            <TextComponent text="GitHub" className={styles.buttonText} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;