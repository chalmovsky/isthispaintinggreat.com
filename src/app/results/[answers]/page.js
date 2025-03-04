import getNumberOfCorrectAnswers from "@/server-utils/answers-check";
import styles from "./results.module.css";
import { NUM_OF_PAINTINGS } from "@/constants";
import Link from "next/link";
import { writeToFileAppendWithISODate } from "@/server-utils/file-system-utils";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import { error } from "next/dist/build/output/log";
import { headers } from "next/headers";

const questionsAndAnswers = [
  {
    question: "What is this ?",
    answer:
      "A website that you can use to find out if you can tell whether a given painting is Great or not! For me, this is very intriguing.",
  },
  {
    question: "What makes a painting Great ?",
    answer:
      "Who knows for sure? That being said, I tried to create some objective criteria by which the paintings were classified as 'Great' or 'Not Great.'",
  },
  {
    question: "What were the criteria to classify a painting as Great ?",
    answer: [
      "Technical Mastery",
      <br key={1} />,
      "Originality & Innovation",
      <br key={2} />,
      "Emotional Impact",
      <br key={3} />,
      "Aesthetic & Visual Harmony",
      <br key={4} />,
      "Cultural or Historical Significance",
      <br key={5} />,
      "Depth of Meaning & Concept",
      <br key={6} />,
      "Timelessness",
      <br key={7} />,
      "Use of Color and Light",
      <br key={8} />,
      "Subject Matter",
      <br key={9} />,
      "Critics’ Consensus & Legacy",
      <br key={10} />,
      "Then they were scored, and if the sum of the scores passed a certain threshold, they were classified as 'Great.'",
    ],
  },
  {
    question:
      "I am convinced that painting number X is Great but the Results say it's Not Great !",
    answer:
      "That's certainly possible. The way we perceive art can be very personal and subjective, and some paintings will look 'Great' to you no matter what anyone says—and that's totally fine. The aim of this website's selection of paintings is to be as objective as possible. One more thing: this webpage is, of course, mainly intended for fun.",
  },
  {
    question: `I'm getting the same ${NUM_OF_PAINTINGS} paintings !`,
    answer:
      "Paintings are refreshed on a demand basis. You can see when the paintings were last refreshed on the home page.",
  },
  {
    question: "Where are the images of the paintings from ?",
    answer:
      "The images are in a Public Domain and they were taken from Wikipedia.",
  },
  {
    question: "Do you collect any data ?",
    answer:
      "The submitted answers are anonymously logged for some stats purposes.",
  },
  {
    question:
      "What percentage of submissions have correctly identified all paintings ?",
    answer:
      "I don't have enough data yet to answer this question. I will update this answer (or add a new page) once there are more data points.",
  },
  {
    question: "Where can I leave some feedback ?",
    answer: [
      "You can check out my homepage ",
      <a key={1} href="https://chalmovsky.com">
        chalmovsky.com
      </a>,
      " there is an email :)",
    ],
  },
];

export default async function Results({ params }) {
  const header = headers();
  const ip = header.get("x-forwarded-for");
  const anonIP = require("crypto")
    .createHash("sha256")
    .update(ip, "utf8")
    .digest("hex");

  const validationRegex = /^(?:not-great|great|%2C)*$/;
  const maxLength = 57; // not-great%2Cnot-great%2Cnot-great%2Cnot-great%2Cnot-great = 57
  if (params.answers.length > maxLength) {
    throw new error("wrong params");
  }
  if (!validationRegex.test(params.answers)) {
    throw new error("wrong params");
  }
  const submittedAnswers = params.answers.split("%2C");

  const numberOfCorrectAnswers = await getNumberOfCorrectAnswers(submittedAnswers);
  //TODO: submittedAnswers.txt -> this needs to be moved out of here to some more persistent storage
  writeToFileAppendWithISODate(
    "submittedAnswers.txt",
    submittedAnswers +
      "\n" +
      numberOfCorrectAnswers +
      "\n" +
      "by 'user' " +
      anonIP +
      "\n"
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>Result</h1>
        <p className={styles.resultsText}>
          <b className={styles.resultNumber}>{numberOfCorrectAnswers} </b>out of{" "}
          <b>{NUM_OF_PAINTINGS}</b>
        </p>
        <p>times you could tell if painting is Great or not.</p>
      </div>

      <p className={styles.retryOrReadFAQ}>
        You can{" "}
        <a className={styles.link} href={"/now-look"}>
          try again
        </a>{" "}
        or read a thing or two about this website.
      </p>

      <div className={styles.aboutThisWebsite}>
        <FrequentlyAskedQuestions
          questionsAndAnswersList={questionsAndAnswers}
        />
      </div>
    </div>
  );
}
