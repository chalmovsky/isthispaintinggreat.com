import { readFirstLineFromFile } from "@/server-utils/file-system-utils";

export default async function getNumberOfCorrectAnswers(submittedAnswers) {
  //TODO: this will be dynamically created, when i will take the images from a 3rd party hosting
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
