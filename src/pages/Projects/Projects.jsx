import React, { useContext, useRef } from "react";
import { TextComponent } from "../../components";
import styles from "./Projects.module.css";
import Card from "../../components/card/Card";
import { List } from "antd";
import { ScrollContext } from "../../config/ScrollContext";
import { motion, useInView } from "framer-motion";
const Projects = () => {
  // const {id} = useContext(ScrollContext);
  // console.log("idddddd", id);

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
      image: "/images/portfolio.jpg",
      demoLink: "https://yourdemo.com",
      githubLink: "https://github.com/yourrepo",
    },
    {
      title: "E-commerce App",
      description: "Full-featured online store with Stripe integration.",
      image: "/images/ecommerce.jpg",
      demoLink: "https://yourdemo2.com",
      githubLink: "https://github.com/yourrepo2",
    },
    {
      title: "Chat App",
      description: "Real-time chat app using Socket.io and React.",
      image: "/images/chat.jpg",
      demoLink: "https://yourdemo3.com",
      githubLink: "https://github.com/yourrepo3",
    },
    {
      title: "Chat App",
      description: "Real-time chat app using Socket.io and React.",
      image: "/images/chat.jpg",
      demoLink: "https://yourdemo3.com",
      githubLink: "https://github.com/yourrepo3",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio built with React and animations.",
      image: "/images/portfolio.jpg",
      demoLink: "https://yourdemo.com",
      githubLink: "https://github.com/yourrepo",
    },
    {
      title: "E-commerce App",
      description: "Full-featured online store with Stripe integration.",
      image: "/images/ecommerce.jpg",
      demoLink: "https://yourdemo2.com",
      githubLink: "https://github.com/yourrepo2",
    },
    {
      title: "Chat App",
      description: "Real-time chat app using Socket.io and React.",
      image: "/images/chat.jpg",
      demoLink: "https://yourdemo3.com",
      githubLink: "https://github.com/yourrepo3",
    },
    {
      title: "Chat App",
      description: "Real-time chat app using Socket.io and React.",
      image: "/images/chat.jpg",
      demoLink: "https://yourdemo3.com",
      githubLink: "https://github.com/yourrepo3",
    },
  ];
  return (
    <div className={styles.mainCont} id={"#projects"}>
      <TextComponent text={"Projects"} className={styles.heading} />
      <div className={styles.projectListDiv}>
        <List
          className={styles.projectList}
          // grid={{ gutter: 16, column: 3 }}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          // grid={{ gutter: 32, xs: 1, sm: 2, md: 3, lg: 3 }}
          dataSource={projects}
          renderItem={(project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { amount: 0.2 }); // triggers every time it appears

            return (
              <div className={styles.listItem}>
                <motion.div
                  ref={ref}
                  className={styles.motionCard}
                  variants={cardVariants}
                  animate={isInView ? "visible" : "hidden"}
                  style={{ width: "95%", marginTop: "20px" }}
                >
                  <Card {...project} />
                </motion.div>
              </div>
            );
          }}
        />
        {/* <List
          className={styles.projectList}
          grid={{ gutter: 16, column: 3 }}
          // grid={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
          dataSource={projects}
          renderItem={(project, index) => (
            <div className={styles.listItem}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
                style={{ width: "95%", marginTop: "20px" }}
              >
                <Card {...project} />
              </motion.div>
            </div>
          )}
        /> */}
      </div>
    </div>
  );
};

export default Projects;
