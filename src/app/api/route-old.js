import { readFirstLineFromFile } from "@/server-utils/file-system-utils";
import { NUM_OF_PAINTINGS } from "@/constants";

// export async function POST(request) {
//   //console.log("POST REQUEST");
//   //await getPaintingsToDisplay();
//   //console.log(correctAnswers);
//
//   const submittedAnswers = await request.json();
//   if (
//     Array.isArray(submittedAnswers) &&
//     submittedAnswers.length === NUM_OF_PAINTINGS
//   ) {
//     const correctAnswersRaw = await readFirstLineFromFile(
//       "/images-for-public-correct-answers.txt",
//     );
//     const correctAnswersArray = correctAnswersRaw.split(",");
//     const numberOfCorrectAnswers = { numberOfCorrectAnswers: 0 };
//     for (
//       let paintingNumber = 0;
//       paintingNumber < correctAnswersArray.length;
//       paintingNumber++
//     ) {
//       if (
//         correctAnswersArray[paintingNumber] === submittedAnswers[paintingNumber]
//       ) {
//         numberOfCorrectAnswers.numberOfCorrectAnswers++;
//       }
//     }
//
//     return Response.json(numberOfCorrectAnswers);
//   } else {
//     return Response.status(403).json("Wrong POST format");
//   }
// }

// this is how would a get function look like
// export async function GET() {
//   const currentNumberOfRuns = await readFirstLineFromFile(
//     "/refresh-counter.txt",
//   );
//
//   if (currentNumberOfRuns < NUMBER_OF_ALLOWED_RESETS_PER_DAY) {
//     await getPaintingsToDisplay();
//     writeFile("/refresh-counter.txt", `${currentNumberOfRuns + 1}`);
//     return Response.json("paintings have been reset!");
//   } else {
//     return Response.json("daily limit of resets have been reached");
//   }
// }
