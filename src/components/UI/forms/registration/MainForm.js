import { Fragment } from "react";
const MainForm=(props)=>{

return (
  <Fragment>
    {/* <div style={padding-bottom: 3px;}> */}
    <form
      class="form-group"
      name="registrationForm"
      action="dqmcTrainingRegistration/postTrainingRegistration/"
      method="POST"
    >
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="course">Course: </label>
        </div>
        <div class="col-md-2 col-sm-3 text-left">
          <input
            type="text"
            readonly
            name="trainingClass"
            id="trainingClass"
            value={props.title}
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2  col-sm-3  text-right">
          <label for="branch">Training Date:</label>
        </div>
        <div class="col-m2-2 col-sm-3">
          <select id="date-select" name="date" required>
            <option value="">-- Please choose --</option>
            <option value="11/30/2021">Nov 30, 2021</option>
            <option value="12/01/2021">Dec 1, 2021</option>
          </select>
        </div>
      </div>
      {/* First Name */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="firstName">First Name: </label>
        </div>
        <div class="col-md-2 col-sm-3">
          <input name="firstName" id="firstName" required />
        </div>
      </div>
      {/* Last Name */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="lastName">Last Name:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-center">
          <input name="lastName" id="lastName" required />
        </div>
      </div>
      {/* Middle Name */}
      <div class="row">
        <div class="col-md-2 col-sm-3  text-right">
          <label for="middleName">Middle Name:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-center">
          <input name="middleName" id="middleName" />
        </div>
      </div>
      {/* Email */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="email:">Email Address:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-center">
          <input name="email" id="email" type="email" required />
        </div>
      </div>
      {/* Direct Phone */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="directPhone">Direct Phone:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-center">
          <input name="directPhone" id="directPhone" type="tel" required />
        </div>
      </div>
      {/* Cell Phone */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="cellPhone:">Cell Phone:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-center">
          <input name="cellPhone" id="cellPhone" type="tel" required />
        </div>
      </div>
      {/* Employee Type */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="employeeType">Employee Type:</label>
        </div>
        <div class="col-md-2 col-sm-3">
          <select name="employeeType" id="employeeType">
            <option>-- Please Choose --</option>
            <option value="CIV">CIV</option>
            <option value="MIL">Military</option>
            <option value="CON">Contractor</option>
          </select>
        </div>
      </div>
      {/* Organization */}
      <div class="row">
        <div class="col-md-2 col-sm-3 text-right">
          <label for="organization">Organization/MTF:</label>
        </div>
        <div class="col-md-2 col-sm-3">
          <input type="text" name="organization" id="organization" />
        </div>
      </div>
      {/* Duty Location */}
      <div class="row">
        <div class="col-md-2 col-sm-3  text-right">
          <label for="dutyLocation">Duty Location:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-center">
          <input name="dutyLocation" id="dutyLocation" />
        </div>
      </div>
      {/* Duty Title */}
      <div class="row">
        <div class="col-md-2 col-sm-3  text-right">
          <label for="dutyTitle">Duty Title:</label>
        </div>
        <div class="col-md-2 col-sm-3 text-center">
          <input name="dutyTitle" id="dutyTitle" />
        </div>
      </div>
      {/* Previous Attend Date */}
      <div class="row">
        <div class="col-md-2 col-sm-3  text-right">
          <label for="previousAttendDate">Previous Att. Date:</label>
        </div>
        <div class="col-md-2 col-sm-3">
          <input
            type="date"
            name="previousAttendDate"
            id="previousAttendDate"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 text-left">
          <div class="col-md-3">
            <input name="timestamp" type="hidden" value="" />
          </div>
        </div>
        <div class="col-md-2 text-left">
          <br />
          <input class="btn btn-primary" type="submit" value="Register" />
        </div>
      </div>
    </form>
  </Fragment>
);
}

export default MainForm;