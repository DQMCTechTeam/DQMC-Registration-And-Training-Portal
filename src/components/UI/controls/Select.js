import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const Select = (props) => {

    const {
      value: clientControlEntered,
      isValid: clientControlIsValid,
      hasError: clientControlHasError,
      valueChangeHandler: clientControlChangedHandler,
      inputBlurHandler: clientControlBlurHandler,
      // reset: resetClientControl,
    } = useInput(isNotEmpty);

    return (
      <select
        onChange={clientControlChangedHandler}
        onBlur={clientControlBlurHandler}
        id={props.id}
        name={props.name}
        class="form-select"
        value={clientControlEntered}
        isValid={clientControlIsValid}
        hasError={clientControlHasError}
      >
        <option value="">Please Choose...</option>
        {props.options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    );
};

export default Select;
