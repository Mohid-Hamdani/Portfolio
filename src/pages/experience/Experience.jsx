import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextComponent } from "../../components";
import styles from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "React & React Native Developer (Mid-Level)",
      company: "Appicoders Inc. ",
      duration: "April 2022 - Nov 2025",
      desc: [
        {
          id: 1,
          points:
            "Built 5+ production web and mobile apps with React.js and React Native.",
        },
        {
          id: 2,
          points:
            "Reduced development time by 40% through cross-platform architecture and code reusability.",
        },
        {
          id: 3,
          points:
            "Implemented Redux for state management and scalable application architecture.",
        },
        {
          id: 4,
          points:
            "Created pixel-perfect UIs with Ant Design and Material UI in collaboration with designers.",
        },
        {
          id: 5,
          points:
            "Mentored junior developers and participated in Agile development sprints.",
        },
      ],
    },
    {
      id: 2,
      position: "React Js Developer (Internee)",
      company: "Coderatory ",
      duration: "Sep 2021 - April 2022",
     desc: [
        {
          id: 1,
          points:
            "Built responsive designs ensuring seamless UX across desktop.",
        },
        {
          id: 2,
          points:
            "Contributed to multiple front-end projects under senior developer guidance.",
        },
        {
          id: 3,
          points:
            "Implemented reusable React components and state management using Redux.",
        },
        {
          id: 4,
          points:
            "Improved performance by optimizing render cycles and API data handling.s",
        },
      ],
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
                    <div className={styles.line}></div>

                  {/* {index !== experiences.length - 1 && (
                  )} */}
                </div>
                <div className={styles.cardContent}>
                  <TextComponent
                    text={exp.position}
                    className={styles.position}
                  />
                  <TextComponent text={exp.company} className={styles.company}>
                    <TextComponent
                      text={exp.duration}
                      className={styles.duration}
                    />
                  </TextComponent>
                  {exp?.desc?.map((des, i) => (
                    <TextComponent
                      key={i}
                      text={`\u2022 ${des?.points}`}
                      className={styles.description}
                    />
                  ))}
                  {/* <TextComponent
                    text={exp.description}
                    className={styles.description}
                  /> */}
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
