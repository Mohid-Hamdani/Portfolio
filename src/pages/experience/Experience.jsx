import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextComponent } from "../../components";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Senior React Developer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Present",
      description:
        "Leading development of scalable React applications with Redux and TypeScript. Mentoring junior developers and conducting code reviews.",
    },
    {
      id: 2,
      position: "React Native Developer",
      company: "Mobile Apps Co.",
      duration: "2021 - 2023",
      description:
        "Built cross-platform mobile applications using React Native. Integrated third-party APIs and implemented push notifications.",
    },
    {
      id: 3,
      position: "Frontend Developer",
      company: "Digital Agency",
      duration: "2020 - 2021",
      description:
        "Developed responsive web applications using React.js. Collaborated with designers to implement pixel-perfect UI components.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const gifVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className={styles.mainCont} id="experience" ref={ref}>
      <TextComponent text={"Experience"} className={styles.heading} />
      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.gifContainer}
          variants={gifVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className={styles.gifWrapper}>
            <img
              src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              alt="Developer coding"
              className={styles.gif}
            />
          </div>
        </motion.div>
        <motion.div
          className={styles.experienceContainer}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.experienceCard}
              variants={itemVariants}
            >
              <div className={styles.cardHeader}>
                <div className={styles.timeline}>
                  <div className={styles.dot}></div>
                  {index !== experiences.length - 1 && (
                    <div className={styles.line}></div>
                  )}
                </div>
                <div className={styles.cardContent}>
                  <TextComponent
                    text={exp.position}
                    className={styles.position}
                  />
                  <TextComponent
                    text={exp.company}
                    className={styles.company}
                  />
                  <TextComponent
                    text={exp.duration}
                    className={styles.duration}
                  />
                  <TextComponent
                    text={exp.description}
                    className={styles.description}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
