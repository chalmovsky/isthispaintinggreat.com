"use client";
import React from "react";
import styles from "./expandablerow.module.css";
import { ChevronDown, ChevronUp } from "react-feather";

function ExpandableRow({ shownText, hiddenText }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.shownWrapper}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <div className={styles.shownText}>{shownText}</div>
        {expanded ? (
          <ChevronUp className={styles.arrow} />
        ) : (
          <ChevronDown className={styles.arrow} />
        )}
      </button>

      {expanded && <div className={styles.hiddenWrapper}>{hiddenText}</div>}
    </div>
  );
}

export default ExpandableRow;
