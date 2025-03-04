"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Loader } from "react-feather";
import styles from "./results-old.module.css";

function Results() {
  const [results, setResults] = React.useState(null);
  const searchParams = useSearchParams();

  React.useEffect(() => {
    async function handleGetResults() {
      const submittedAnswers = searchParams.get("rl").split(",");
      const request = new Request("/api", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(submittedAnswers),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const response = await fetch(request);
      const results = await response.json();
      setResults(results);
    }
    // this will call the function sync but will become async the moment it hits the await
    handleGetResults();
  }, [searchParams]);

  if (results) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Results</h1>
        <p className={styles.resultsText}>
          You could tell if painting is great or not{" "}
          {results.numberOfCorrectAnswers}{" "}
          {results.numberOfCorrectAnswers === 0 && "times"}
          {results.numberOfCorrectAnswers === 1 && "time"}
          {results.numberOfCorrectAnswers > 1 && "times"}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <Loader className={styles.loader} />
    </div>
  );
}

// commented out, it's just for reference
//export default Results;
