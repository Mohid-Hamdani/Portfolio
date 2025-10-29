import React from "react";
import styles from "./TextComponent.module.css";
const TextComponent = (props) => {
  return (
    <span
      id={props?.id}
      {...props}
      ref={props?.ref}
      className={`${styles.text} ${props?.className}`}
      onClick={props.onClick}
      style={props?.style}
    >
      {props.text}
      {props.children}
    </span>
  );
};

export default TextComponent;
