import { Fragment } from "react";
import QuestionList from "../QuestionList";

const Survey = () => {
  const questions = [
    {
      num: 0,
      question: "What is one plus one?",
      options: ["1", "4", "5", "2", "3"],
      answerType: "text",
    },
    {
      num: 1,
      question: "What is two plus one?",
      options: ["1", "4", "5", "2", "3"],
      answerType:'text',
    },
  ];
  return (
    <Fragment>
      {/* First Name */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="firstname">* First Name: </label>
        </div>
        <div class="col-md-2 col-sm-3">
          <input class="text-width" name="firstname" id="firstname" required />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="lastname">* Last Name:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <input class="text-width" name="lastname" id="lastname" required />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="email:">* Email:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <input
            class="text-width"
            name="email"
            id="email"
            type="email"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="phone">* Phone:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <input
            class="text-width"
            name="phone"
            id="phone"
            type="phone"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="site">* Site:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <select name="site" id="site" required>
            <option value="">Please Choose...</option>
            <option value="MTF">MTF</option>
            <option value="Region">Region</option>
            <option value="OTSG">OTSG</option>
            <option value="DHA">DHA</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="role">* Role:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <select name="role" id="role" required>
            <option value="">Please Choose...</option>
            <option value="DQ Manager">DQ Manager</option>
            <option value="Alt DQ Manager">Alt DQ Manager</option>
            <option value="UBO">UBO</option>
            <option value="Coding / PAD">Coding / PAD</option>
            <option value="MEPRS/Finance">MEPRS/Finance</option>
            <option value="Information Management">
              Information Management
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="Session">Breakout Session:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <select name="Session" id="Session">
            <option value="">Please Choose (if applicable...)</option>
            <option value="Review List and Statement">
              Review List and Statement
            </option>
            <option value="GENESIS Review and Statement">
              GENESIS Review and Statement
            </option>
            <option value="CHCS and ADM">
              CHCS and ADM - Achieving Data Quality Success
            </option>
            <option value="GENESIS Ambulatory Encounter Completion Report">
              GENESIS Ambulatory Encounter Completion Report
            </option>
            <option value="OPEN Encounters">OPEN Encounters</option>
            <option value="GENSIS - Life Cycle of an Encounter">
              GENSIS - Life Cycle of an Encounter
            </option>
            <option value="GTDQ and Workbook ">GTDQ and Workbook</option>
            <option value="GENESIS - Resources, References, and Miscellaneous Case Studies">
              GENESIS - Resources, References, and Miscellaneous Case Studies{" "}
            </option>
            <option value="Legacy Panel Discussion">
              Legacy Panel Discussion
            </option>
            <option value="GENESIS - MHS GENESIS DQM Panel Discussion">
              GENESIS - MHS GENESIS DQM Panel Discussion
            </option>
          </select>
        </div>
      </div>
      <QuestionList questions={questions}/>
    </Fragment>
  );
};

export default Survey;
