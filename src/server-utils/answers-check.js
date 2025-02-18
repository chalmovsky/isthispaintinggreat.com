import { readFirstLineFromFile } from "@/server-utils/file-system-utils";

export default async function getNumberOfCorrectAnswers(submittedAnswers) {
  const correctAnswersRaw = await readFirstLineFromFile(
    "/images-for-public-correct-answers.txt",
  );
  const correctAnswersArray = correctAnswersRaw.split(",");
  let numberOfCorrectAnswers = 0;
  for (
    let paintingNumber = 0;
    paintingNumber < correctAnswersArray.length;
    paintingNumber++
  ) {
    if (
      correctAnswersArray[paintingNumber] === submittedAnswers[paintingNumber]
    ) {
      numberOfCorrectAnswers++;
    }
  }
  return numberOfCorrectAnswers;
}
