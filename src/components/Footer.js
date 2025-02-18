import React from "react";
import styles from "./Footer.module.css";
import { readFirstLineFromFile } from "@/server-utils/file-system-utils";
async function Footer() {
  const paintingsRefreshed = await readFirstLineFromFile("last-refreshed.txt");
  return (
    <div className={styles.wrapper}>
      <p>Paintings were refreshed at {paintingsRefreshed}</p>
    </div>
  );
}

export default Footer;
