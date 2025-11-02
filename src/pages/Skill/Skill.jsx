import React from "react";
import { motion } from "framer-motion";
import styles from "./Skill.module.css";
const skills = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
];

const Skill = () => {
  return (
    <div className={styles.mainCont} id="skills">
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.scrollContainer}>
        <motion.div
          className={styles.scrollContent}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className={styles.skillItem}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;