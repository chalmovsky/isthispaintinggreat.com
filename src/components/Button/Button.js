import React from "react";
import styles from "./button.module.css";

function Button({
  children,
  showContentWhileNotClickable = false,
  ...delegated
}) {
  return (
    <button
      className={`${styles.button} ${
        showContentWhileNotClickable ? styles.buttonShowNotClickableContent : ""
      }`}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
