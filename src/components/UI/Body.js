import { Link } from "react-router-dom";
import { Fragment } from "react";
import Poam from './forms/Poam';

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
                    <h2>This site contains:</h2>
                    <ul>
                      <li>
                        <Link to="/questionnaire">DQMC Training Survey </Link>
                      </li>
                      <li>
                        <Link to="/dqmcTrainingRegistration?form=newDQManager">
                          DQMC Training Registration{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
                {props.showPoam && (<Poam/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
