"use client";
import React from "react";
import Image from "next/image";
import styles from "./paintingsbrowser.module.css";
import { Loader } from "react-feather";
import ArrowButton from "@/components/ArrowButton/ArrowButton";
import EagerClickable from "@/components/EagerClickable/EagerClickable";
import Button from "@/components/Button/Button";

function PaintingsBrowser({ paintings }) {
  const [currentlyViewing, setCurrentlyViewing] = React.useState(0);
  const [paintingsVerdicts, setPaintingsVerdicts] = React.useState(() =>
    Array(paintings.length).fill(undefined),
  );
  const [isImageLoading, setIsImageLoading] = React.useState(true);

  const allVerdictsDone = !paintingsVerdicts.some(
    (selection) => selection === undefined,
  );
  const currentVerdict = paintingsVerdicts[currentlyViewing];

  function handleShowNext() {
    if (currentlyViewing === paintings.length - 1) {
      return;
    }
    setCurrentlyViewing(currentlyViewing + 1);
    setIsImageLoading(true);
  }

  function handleShowPrevious() {
    if (currentlyViewing === 0) {
      return;
    }
    setCurrentlyViewing(currentlyViewing - 1);
    setIsImageLoading(true);
  }

  function handlePaintingVerdict(type) {
    const nextSelection = [...paintingsVerdicts];
    nextSelection[currentlyViewing] = type;
    setPaintingsVerdicts(nextSelection);
  }

  return (
    <div className={styles.wrapper}>
      {isImageLoading && <Loader className={styles.loader} />}
      <div className={styles.imageWrapper}>
        {/* TODO: probably could be good to rework this to use some kind of blob database*/}

        <Image
          key={currentlyViewing}
          className={styles.image}
          src={paintings[currentlyViewing]}
          alt={`painting number ${currentlyViewing + 1}`}
          // placeholder={"blur"} i would normally use it but in this case it produces unpleasant flicker
          onLoad={() => {
            setIsImageLoading(false);
          }}
          fill={true}
          priority={true}
        />
      </div>
      <div className={styles.infoAndControlWrapper}>
        <h1 className={styles.imageNumberInfoText}>
          Showing painting number{" "}
          <span className={styles.firstNumber}> {currentlyViewing + 1}</span>/
          <span className={styles.secondNumber}>{paintings.length} </span>
        </h1>
      </div>

      <div className={styles.imageVerdictButtons}>
        <ArrowButton
          pointTo={"left"}
          onClick={handleShowPrevious}
          disabled={currentlyViewing === 0}
        />
        <Button
          showContentWhileNotClickable={currentVerdict === "great"}
          onClick={() => handlePaintingVerdict("great")}
        >
          Great
        </Button>
        <Button
          showContentWhileNotClickable={currentVerdict === "not-great"}
          onClick={() => handlePaintingVerdict("not-great")}
        >
          Not Great
        </Button>
        <ArrowButton
          pointTo={"right"}
          onClick={handleShowNext}
          disabled={currentlyViewing === paintings.length - 1}
        />
        {allVerdictsDone ? (
          <EagerClickable>
            {" "}
            <Button className={styles.resultsButton}>
              <a
                href={`/results/${paintingsVerdicts.toString()}`}
                className={styles.link}
              >
                Get Results
              </a>
            </Button>
          </EagerClickable>
        ) : (
          <Button className={styles.resultsButton} disabled>
            Get Results
          </Button>
        )}
      </div>
    </div>
  );
}

export default PaintingsBrowser;
