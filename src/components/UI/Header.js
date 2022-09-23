import { Link } from "react-router-dom";
import { Fragment } from "react";
import classes from "./Header.module.css";
import Resources from "./Resources/Resources";

const Header = (props) => {
  // const t = [{title:"Saab"}, {title:"Volvo"}, {title:"BMW"}];
  const trainingResources = [
    {
      resources: [
        {
          title: "Adhoc Training Guides",
          link: "",
          items: [
            {
              title: "Building GS Billable APPTS adhocs",
              link: "https://kx.health.mil/kj/kx2/DataQuality/Documents/E.%20CHCS%20Adhocs/Adhoc%20Training%20Guides/Building%20GS%20BILLABLE%20APPTS%20adhocs.pdf",
            },
            {
              title: "GS NONBILL Coding Audit Adhoc Instructions",
              link: "https://kx.health.mil/kj/kx2/DataQuality/Documents/E.%20CHCS%20Adhocs/Adhoc%20Training%20Guides/GS%20NONBILL%20CODING%20AUDIT%20Adhoc%20Instructions.pdf",
            },
            {
              title:
                "Use of GS MON TCON Results Recieved Adhoc to Monitor Network Results",
              link: "https://kx.health.mil/kj/kx2/DataQuality/Documents/E.%20CHCS%20Adhocs/Adhoc%20Training%20Guides/Use%20of%20GS%20MON%20TCON%20RESULTS%20RECD%20Ad%20Hoc%20to%20Monitor%20Network%20Results.pdf",
            },
          ],
        },
      ],
    },
  ];
  // console.log(`t: ${t}`);
  // console.log(`trainingResources: ${trainingResources.resources}`);
  return (
    <Fragment>
      <header class="navbar navbar-bright navbar-fixed-top" role="banner">
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to="/home" class="navbar-brand">
              HOME
            </Link>
            <a
              href="https://kx.health.mil/kj/kx2/DataQuality/Pages/home.aspx"
              class="navbar-brand"
              target="_blank"
              rel="noreferrer"
            >
              Knowledge Exchange
            </a>
          </div>
          <nav class="collapse navbar-collapse" role="navigation">
            <ul class="nav navbar-nav" style={{ paddingBottom: 5 }}></ul>
          </nav>
        </div>
      </header>

      <div id="masthead">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="panel">
                <div class="panel-body">
                  <h2 className={classes.h2}>Training Resources:</h2>
                  <Resources resources={trainingResources} />
                  <h2 className={classes.h2}>Register for Training:</h2>
                  <ul>
                    <li>
                      <Link to="/dqmcTrainingRegistration?form=newDQManager">
                        DQMC Training Registration{" "}
                      </Link>
                    </li>
                  </ul>
                  <h2 className={classes.h2}>Complete Our Survey:</h2>
                  <ul>
                    <li>
                      <Link to="/questionnaire">DQMC Training Survey </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="well well-lg">
                <div class="row">
                  <div class="col-sm-12" style={{ textAlign: "center" }}>
                    <img src="css/images/dha_medicine.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="top-spacer"> </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
