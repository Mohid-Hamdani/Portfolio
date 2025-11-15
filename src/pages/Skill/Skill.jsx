import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextComponent } from "../../components";
import styles from "./Skill.module.css";
import reactjsIcon from "../../assets/images/reactjs.jpeg";
import reactSVG from "../../assets/images/reactjs.svg";
import js from "../../assets/images/js.svg";
import reduxSVG from "../../assets/images/redux.svg";
import tlwSVG from "../../assets/images/tailwind.svg";
import gitSVG from "../../assets/images/git.svg";
import githubSVG from "../../assets/images/github.svg";
import nextjsSVG from "../../assets/images/nextjs.svg";
import tsSVG from "../../assets/images/typescript.svg";
import htmlSVG from "../../assets/images/html.svg";
import cssSVG from "../../assets/images/css.svg";
import axSVG from "../../assets/images/Azios.svg";
import postSVG from "../../assets/images/Postman.svg";
import antdSVG from "../../assets/images/Antd.svg";
const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "React", icon: reactSVG, color: "#61DAFB", level: 80 },
    { name: "React Native", icon: reactSVG, color: "#61DAFB", level: 70 },
    { name: "JavaScript", icon: js, color: "#F7DF1E", level: 60 },
    { name: "Redux", icon: reduxSVG, color: "#764ABC", level: 90 },
    // { name: "Node.js", icon: "🟢", color: "#339933", level: 85 },
    { name: "Tailwind", icon: tlwSVG, color: "#06B6D4", level: 70 },
    { name: "Next.js", icon: nextjsSVG, color: "#000000", level: 50 },
    { name: "TypeScript", icon: tsSVG, color: "#3178C6", level: 30 },
    { name: "CSS", icon: cssSVG, color: "#1572B6", level: 90 },
    { name: "Html", icon: htmlSVG, color: "#E44D26", level: 95 },
    { name: "Axios", icon: axSVG, color: "#5A29E4", level: 90 },

    { name: "Postman", icon: postSVG, color: "#F37036", level: 80 },
    { name: "Ant Design", icon: antdSVG, color: "#F74B5C", level: 80 },
    { name: "Git", icon: gitSVG, color: "#EE513B", level: 80 },

    { name: "Github", icon: githubSVG, color: "#000000", level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.mainCont} id="skills" ref={ref}>
      <TextComponent
        text={"Skills & Technologies"}
        className={styles.heading}
      />

      <motion.div
        className={styles.skillsGrid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skillCard}
            variants={skillVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              "--skill-color": skill.color,
            }}
          >
            <motion.div
              className={styles.skillIcon}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name || "skill-icon"}
                className={styles.iconImage}
              />
            </motion.div>
            <TextComponent text={skill.name} className={styles.skillName} />
            <div className={styles.skillBar}>
              <motion.div
                className={styles.skillProgress}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{
                  delay: index * 0.1 + 0.5,
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            </div>
            <span className={styles.skillLevel}>{skill.level}%</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={styles.floatingTech1}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
      <motion.div
        className={styles.floatingTech2}
        animate={{
          y: [20, -20, 20],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🎨
      </motion.div>
    </div>
  );
};

export default Skill;
