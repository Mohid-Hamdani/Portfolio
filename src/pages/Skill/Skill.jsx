import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextComponent } from "../../components";
import styles from "./Skill.module.css";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "React", icon: "⚛️", color: "#61DAFB", level: 80 },
    { name: "React Native", icon: "📱", color: "#61DAFB", level: 70 },
    { name: "JavaScript", icon: "🟨", color: "#F7DF1E", level: 60 },
    { name: "Redux", icon: "🔮", color: "#764ABC", level: 90 },
    // { name: "Node.js", icon: "🟢", color: "#339933", level: 85 },
    { name: "Tailwind", icon: "💨", color: "#06B6D4", level: 70 },
    { name: "Git", icon: "📦", color: "#F05032", level: 80 },
    { name: "Next.js", icon: "▲", color: "#000000", level: 50 },
    { name: "TypeScript", icon: "🔷", color: "#3178C6", level: 30 },

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
      <TextComponent text={"Skills & Technologies"} className={styles.heading} />

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
              {skill.icon}
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
