import React from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { error } from "next/dist/build/output/log";
import Button from "@/components/Button/Button";
import styles from "./arrowbutton.module.css";
/**
 * renders a primitive button, that has arrow icon inside
 * @param pointTo "left" or "right" are valid values
 * @param delegated
 * @returns {JSX.Element}
 * @constructor
 */
function ArrowButton({ pointTo, ...delegated }) {
  if (pointTo !== "left" && pointTo !== "right") {
    throw new Error("valid values for point to are: 'left' or 'right' ");
  }
  return (
    <Button {...delegated} className={styles.arrowButton}>
      {pointTo === "left" ? <ArrowLeft /> : <ArrowRight />}
    </Button>
  );
}

export default ArrowButton;
