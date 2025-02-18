import ExpandableRow from "@/components/ExpandableRow/ExpandableRow";
import styles from "./frequentlyaskedquestions.module.css";

function FrequentlyAskedQuestions({ questionsAndAnswersList }) {
  return (
    <div className={styles.wrapper}>
      {questionsAndAnswersList.map((questionAndAnswer, index) => (
        <ExpandableRow
          key={index}
          shownText={questionAndAnswer.question}
          hiddenText={questionAndAnswer.answer}
        />
      ))}
    </div>
  );
}

export default FrequentlyAskedQuestions;
