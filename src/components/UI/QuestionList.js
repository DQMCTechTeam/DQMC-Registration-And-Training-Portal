import Question from "./Question";
const QuestionList = (props) => {
  return (
    <div>
      {props.questions.map((question) => (
        <Question
          num={question.num}
          question={question.question}
          options={question.options}
          answerType={question.answerType}
        />
      ))}
    </div>
  );
};

export default QuestionList;
