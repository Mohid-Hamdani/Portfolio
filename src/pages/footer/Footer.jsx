import React from "react";
import { motion } from "framer-motion";
import { TextComponent } from "../../components";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub size={24} />,
      url: "https://github.com/Mohid-Hamdani",
      label: "GitHub",
    },
    {
      id: 2,
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/mohid-hamdani-8a6157214/",
      label: "LinkedIn",
    },
  {
    id: 3,
    icon: <FaWhatsapp size={24} />,
    url: "https://wa.me/+923110230383", 
    label: "WhatsApp",
  },
  ];

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <footer className={styles.mainCont} id="contact">
      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.contactSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TextComponent text={"Let's Connect"} className={styles.heading} />
          <TextComponent
            text={
              "Feel free to reach out for collaborations or just a friendly hello"
            }
            className={styles.subheading}
          />

          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                custom={index}
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            className={styles.emailSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mohidhamdani1999@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <TextComponent
                text={"mohidhamdani1999@gmail.com"}
                className={styles.email}
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <TextComponent
            text={"© 2024 Mohid Hamdani. All rights reserved."}
            className={styles.copyrightText}
          />
          <TextComponent
            text={"Built with React & passion ❤️"}
            className={styles.builtWith}
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
