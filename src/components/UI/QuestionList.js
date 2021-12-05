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
          placeholder={question.placeholder}
        />
      ))}
    </div>
  );
};

export default QuestionList;
