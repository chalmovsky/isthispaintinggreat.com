import React from "react";
import gameRules from "../../constants";
import styles from "./rules.module.css";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function RulesPage() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>Rules and Hints</h1>
      <ul className={styles.rulesWrapper}>
        {gameRules.map((rule) => (
          <li key={rule} className={styles.ruleItem}>
            - {rule}
          </li>
        ))}
      </ul>
      <a className={styles.link} href={"/now-look"}>
        {"Okay, let's go !"}
      </a>
      <Footer />
    </div>
  );
}
