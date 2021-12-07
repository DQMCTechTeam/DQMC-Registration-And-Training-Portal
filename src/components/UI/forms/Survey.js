import { Fragment, useState, useCallback, useEffect } from "react";
import QuestionList from "../QuestionList";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmailValid = (value) =>
  isNotEmpty && /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value);
const isPhoneValid = (value) =>
  isNotEmpty &&
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
const sites = ["MTF", "REGION", "OTSG", "DHA"];
const roles = [
  "DQ Manager",
  "Alt DQ Manager",
  "UBO",
  "Coding / PAD",
  "MEPRS / Finance",
  "Information Management",
  "Other",
];
const breakOutSession = [
  "Review List Statement",
  "GENESIS Review and Statement",
  "CHCS and ADM - Achieving Data Quality Success",
  "GENESIS Ambulatory Encounter Completion Report",
  "Open Encounters",
  "GENESIS Lifecycle Encounter",
  "GTDQ and Workbook",
  "GENESIS - Resources, References, and Miscellaneous Case Studies",
  "Legacy Panel Discussion",
  "GENESIS - MHS GENESIS DQM Panel Discussion",
];
const isSiteValid = (value) => sites.includes(value);

const Survey = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestionsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:5000/apiValueBenefit/getQuestionnaire/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedQuestions = [];
      for (const key in data.body) {
        loadedQuestions.push({
          id: key,
          num: data.body[key].num,
          question: data.body[key].question,
          answerType: data.body[key].answerType,
          placeholder: data.body[key].placeHolder,
          options: data.body[key].options,
        });
      }

      setQuestions(loadedQuestions);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchQuestionsHandler();
  }, [fetchQuestionsHandler]);

  const submitFormHandler = (event) => {
    console.log("form submitted!");
    event.preventDefault();
    if (!firstNameIsValid) {
      return;
    }
    if (!lastNameIsValid) {
      return;
    }
    if (!emailIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhone();
    resetSite();
  };
  let content = "<p>Found no questions</p>";
  if (error) {
    content = <p>{error}</p>;
  }
  const {
    value: firstNameEntered,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameEntered,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailEntered,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmailValid);

  const {
    value: phoneEntered,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isPhoneValid);

  const {
    value: siteEntered,
    isValid: siteIsValid,
    hasError: siteHasError,
    valueChangeHandler: siteChangedHandler,
    inputBlurHandler: siteBlurHandler,
    reset: resetSite,
  } = useInput(isSiteValid);

  let formIsValid =
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    siteIsValid;

  if (questions.length > 0) {
    content = (
      <Fragment>
        <form onSubmit={submitFormHandler}>
          <QuestionList questions={questions} />
          <div class="row">
            <div class="col-md-12">
              <br />
              <input
                disabled={!formIsValid}
                class="btn btn-primary"
                type="submit"
                value="Submit"
              />
              <br />
            </div>
          </div>
        </form>
      </Fragment>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const firstNameClasses = firstNameHasError
    ? "col-md-2 col-sm-3 invalid"
    : "col-md-2 col-sm-3";

  const lastNameClasses = lastNameHasError
    ? "col-md-2 col-sm-3 invalid"
    : "col-md-2 col-sm-3";

  const emailClasses = emailHasError
    ? "col-md-2 col-sm-3 invalid"
    : "col-md-2 col-sm-3";

  const phoneClasses = phoneHasError
    ? "col-md-2 col-sm-3 invalid"
    : "col-md-2 col-sm-3";

  const siteClasses = siteHasError
    ? "col-md-2 col-sm-3 invalid"
    : "col-md-2 col-sm-3";
  return (
    <Fragment>
      {/* First Name */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="firstname">* First Name: </label>
        </div>
        <div className={firstNameClasses}>
          <input
            class="text-width"
            name="firstname"
            id="firstname"
            value={firstNameEntered}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            required
          />
        </div>
        <div>
          {firstNameHasError && (
            <p className="col-md-2 col-lg-3 text-left error-text">
              Please enter a first name
            </p>
          )}
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="lastname">* Last Name:</label>
        </div>
        <div className={lastNameClasses}>
          <input
            class="text-width"
            name="lastname"
            id="lastname"
            value={lastNameEntered}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
        <div>
          {lastNameHasError && (
            <p className="col-md-2 col-lg-3 text-left error-text">
              Please enter a last name
            </p>
          )}
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="email:">* Email:</label>
        </div>
        <div className={emailClasses}>
          <input
            class="text-width"
            name="email"
            id="email"
            type="email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={emailEntered}
          />
        </div>
        <div>
          {emailHasError && (
            <p className="col-md-2 col-lg-3 text-left error-text">
              Please enter a valid email
            </p>
          )}
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="phone">* Phone:</label>
        </div>
        <div className={phoneClasses}>
          <input
            class="text-width"
            name="phone"
            id="phone"
            type="phone"
            onChange={phoneChangedHandler}
            onBlur={phoneBlurHandler}
            value={phoneEntered}
          />
        </div>
        <div>
          {phoneHasError && (
            <p className="col-md-2 col-lg-3 text-left error-text">
              Please enter a valid phone number
            </p>
          )}
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="site">* Site:</label>
        </div>
        <div className={siteClasses}>
          <select
            onBlur={siteBlurHandler}
            onChange={siteChangedHandler}
            name="site"
            id="site"
            required
            value={siteEntered}
          >
            <option value="">Please Choose...</option>
            {sites.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          {siteHasError && (
            <p className="col-md-2 col-lg-3 text-left error-text">
              Please select a site
            </p>
          )}
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 col-sm-3 text-left">
          <label for="role">* Role:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <select name="role" id="role" required>
            <option value="">Please Choose...</option>
            {roles.map((option) => (
              <option value={option}>{option}</option>
            ))}
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
            {breakOutSession.map((option) => (
              <option value={option}>{option}</option>
            ))}{" "}
          </select>
        </div>
      </div>
      <section>{content}</section>
    </Fragment>
  );
};

export default Survey;
