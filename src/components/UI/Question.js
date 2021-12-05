import { Fragment } from "react";
const Question = (props) => {
  let itemName = `question_${props.num}`;
  let itemNameId = `question_id${props.num}`;
  return (
    <Fragment>
      <br />
      <br />
      <h5>
        <label>
          <p>{props.question}</p>
          <input
            type="hidden"
            name={itemName}
            id={itemName}
            value={props.question}
          />
          <input
            type="hidden"
            name={itemNameId}
            id={itemNameId}
            value={props.question}
          />
        </label>
      </h5>
      <div class="row text-left">
        <div class="col-md-12">
          <div class="input-group mb-3"></div>
          <select class="form-select">
            <option value="">Please Choose...</option>
            {props.options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          {(props.answerType === "text" ||
            props.answerType === "optionText") && <textarea placeholder={props.placeholder}></textarea>}
        </div>
      </div>
    </Fragment>
  );
};

export default Question;
