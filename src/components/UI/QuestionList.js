import { Fragment } from "react";
import Question from "./Question";
const QuestionList = (props) => {
  return (
    <Fragment>
      {props.questions.map((question) => (
          <Question
          key={question.num}
            num={question.num}
            question={question.question}
            options={question.options}
            answerType={question.answerType}
            placeholder={question.placeholder}
          />
      ))}
      <div class="row">
        <div class="col-md-12">
          <input name="timestamp" type="hidden" value="" />
        </div>
      </div>
    </Fragment>
  );
};

export default QuestionList;
