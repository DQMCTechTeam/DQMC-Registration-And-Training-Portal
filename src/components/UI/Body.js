import Login from "./forms/Login";
import { Fragment } from "react";
import Poam from './forms/Poam';
import Survey from "./forms/Survey";
import './Body.css'
import DQManager from "./forms/DQManager";
import POAMCentralValidation from "./forms/POAMCentralValidation";
// import DQMCTrainingRegistration from "../../pages/DQMCTrainingRegistration";
const Body = (props) => {
  return (
    <Fragment>
      <div class="container">
        <div class="row"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="panel">
              <div class="panel-body">
                {props.showLinks && (
                  <div>
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Login into your DQMC Training and Information Portal:</h2>
                            </div>
                            <div class="col-md-5">
                                <Login/>
                            </div>
                        </div>

                  </div>
                )}
                {props.showDQMCTrainingRegistration && <DQManager/>}
                {props.showPoam && <Poam />}
                {props.showPoamCenValid && <POAMCentralValidation/>}
                {props.showQuestionnare && <Survey/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
