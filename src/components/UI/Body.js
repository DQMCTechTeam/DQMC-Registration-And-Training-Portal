import { Fragment } from "react";

const Body = () => {
  return (
    <Fragment>
      <div class="container">
        <div class="row"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="panel">
              <div class="panel-body">
                <h2>This site contains:</h2>
                <ul>
                  <li>
                    <a href="/questionnaire">DQMC Training Survey </a>
                  </li>
                  <li>
                    <a href="/dqmcTrainingRegistration?form=newDQManager">
                      DQMC Training Registration{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Body;
