import React from "react";
import styles from "./eager.module.css";

function EagerClickable({ children, ...delegated }) {
  return (
    <div className={styles.eager} {...delegated}>
      {children}
    </div>
  );
}

export default EagerClickable;
