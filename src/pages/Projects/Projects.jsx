import React, { useRef } from "react";
import TextComponent from "../../components/textComponent/TextComponent";
import styles from "./Projects.module.css";
import Card from "../../components/card/Card";
import { motion, useInView } from "framer-motion";

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

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio built with React and animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
      demoLink: "https://yourdemo.com",
      githubLink: "https://github.com/yourrepo",
    },
    {
      title: "E-commerce App",
      description: "Full-featured online store with Stripe integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
      demoLink: "https://yourdemo2.com",
      githubLink: "https://github.com/yourrepo2",
    },
    {
      title: "Chat Application",
      description: "Real-time chat app using Socket.io and React.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800",
      demoLink: "https://yourdemo3.com",
      githubLink: "https://github.com/yourrepo3",
    },
    {
      title: "Task Manager",
      description: "Productivity app with drag-and-drop functionality.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
      demoLink: "https://yourdemo4.com",
      githubLink: "https://github.com/yourrepo4",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with beautiful UI and animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
      demoLink: "https://yourdemo5.com",
      githubLink: "https://github.com/yourrepo5",
    },
    {
      title: "Social Media Clone",
      description: "Feature-rich social platform with real-time updates.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
      demoLink: "https://yourdemo6.com",
      githubLink: "https://github.com/yourrepo6",
    },
  ];

  return (
    <div className={styles.mainCont} id="projects">
      <TextComponent text={"Projects"} className={styles.heading} />
      <TextComponent
        text={"Here are some of my recent works and side projects"}
        className={styles.subheading}
      />
      <div className={styles.projectGrid}>
        {projects.map((project, index) => {
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