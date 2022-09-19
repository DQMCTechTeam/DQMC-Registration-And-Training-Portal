import { Fragment, useState, useCallback } from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmailValid = (value) =>
  isNotEmpty && /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value);
const isPhoneValid = (value) =>
  isNotEmpty &&
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
const Input = (props) => {
    const [error, setError] = useState(null);
      const {
        value: clientControlEntered,
        isValid: clientControlIsValid,
        hasError: clientControlHasError,
        valueChangeHandler: clientControlChangedHandler,
        inputBlurHandler: clientControlBlurHandler,
        reset: resetClientControl,
      } = useInput(isNotEmpty);
};

export default Input;
