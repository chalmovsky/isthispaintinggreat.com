import styles from "./homepage.module.css";
import EagerClickable from "@/components/EagerClickable/EagerClickable";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <h1 className={styles.titleHook}>
        Can you tell if a painting is Great ?
      </h1>
      <EagerClickable>
        <a className={styles.link} href={"/rules"}>
          {"Let's find out!"}
        </a>
      </EagerClickable>
      <div className={styles.quoteAndAttributionContainer}>
        <p className={styles.quote}>
          I looked at the guidebook...&rdquo;...there are fourteen panels by
          Botticelli, Perugino&rdquo; &mdash;all these great artists &mdash;
          &rdquo;and two by So&ndash;and&ndash;so, which are of no
          significance.&rdquo; This was a terrific excitement to me, that I also
          could tell the difference between a beautiful work of art and one
          that&rsquo;s not.
        </p>
        <p>— Richard Feynman, Surely You&rsquo;re Joking, Mr. Feynman!</p>
      </div>

      <Footer />
    </>
  );
}
