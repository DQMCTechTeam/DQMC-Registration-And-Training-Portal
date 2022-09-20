import { Link } from "react-router-dom";
import { Fragment } from "react";
import Poam from './forms/Poam';
import PoamCenValid from "./forms/PoamCenValid";
import Survey from "./forms/Survey";
import './Body.css'
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
                    <h2>Login into your DQMC Training and Information Portal:</h2>

                  </div>
                )}
                {props.showPoam && <Poam />}
                {props.showPoamCenValid && <PoamCenValid />}
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
