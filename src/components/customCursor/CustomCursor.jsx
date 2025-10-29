import { motion } from "framer-motion";
import { useContext } from "react";
import styles from './CustomCursor.module.css';
import { CursorContext } from "../../config/CursorContext";

const CustomCursor = () => {
  const { position, variant, cursorVariants } = useContext(CursorContext);
console.log("//////////", position);

  return (
    <motion.div
      className={styles.customcursor}
      variants={cursorVariants}
      animate={variant}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default CustomCursor;