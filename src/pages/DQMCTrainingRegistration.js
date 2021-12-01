import { Fragment } from "react";
import Body from "../components/UI/Body";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const DQMCTrainingRegistration = () => {
  return (
    <Fragment>
      <Header
        title={"Data Quality Training Registration and Information 2021"}
      />
      <Body showLinks={false} showPoamCenValid={true} />

      <Footer />
    </Fragment>
  );

};

export default DQMCTrainingRegistration;
