import React, { useRef } from "react";
import TextComponent from "../../components/textComponent/TextComponent";
import styles from "./Projects.module.css";
import Card from "../../components/card/Card";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../../data/Projects";

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

 

  return (
    <div className={styles.mainCont} id="projects">
      <TextComponent text={"Projects"} className={styles.heading} />
      <TextComponent
        text={"Here are some of my recent works and side projects"}
        className={styles.subheading}
      />
      <div className={styles.projectGrid}>
        {projectsData.map((project, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, amount: 0.2 });

          return (
            <motion.div
              key={index}
              ref={ref}
              className={styles.cardWrapper}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
            >
              <Card {...project} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;