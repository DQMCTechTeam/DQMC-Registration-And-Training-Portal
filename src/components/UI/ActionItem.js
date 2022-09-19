import { Fragment } from 'react'
const ActionItem=(props)=>{

      return (
        <Fragment>
          <div class="row">
            <div class="col-md-2 col-sm-3 text-left">
              <input
                type="checkbox"
                id="actionItemCheckBox"
                name="actionItemCheckBox"
                checked={props.itemChecked}
              ></input>
              <label for="actionItemCheckBox">Action item:</label>
            </div>
            <div class="col-md-2 col-sm-3">
              <textarea
                class="text-width"
                name="actionitem"
                id="actionitem"
                cols="75"
                rows="2"
                value={props.text}
              ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 col-sm-3 text-left">
              <label for="actionofficer">Action officer: </label>
            </div>
            <div class="col-md-2 col-sm-3">
              <input
                class="text-width"
                name="actionofficer"
                id="actionofficer"
                required
                value={props.officer}
              />
            </div>
            <div class="col-md-2 col-sm-3 text-left">
              <label for="actionEstDate">Estimated Date: </label>
            </div>
            <div class="col-md-2 col-sm-3">
              <input
                type="date"
                class="text-width"
                name="actionEstDate"
                id="actionEstDate"
                required
                value={props.estimatedDate}
              />
            </div>
          </div>
          <div class="row"></div>
          <div class="row">
            <div class="col-md-2 col-sm-3 text-left">
              <label for="actionActDate">Actual Date: </label>
            </div>
            <div class="col-md-2 col-sm-3">
              <input
                type="date"
                class="text-width"
                name="actionActDate"
                id="actionActDate"
                required
                value={props.actualDate}
              />
              <br />
              <br />
            </div>
          </div>
        </Fragment>
      );
}

export default ActionItem;