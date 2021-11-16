import { Fragment } from "react";
import Body from "../components/UI/Body";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Questionnaire = () => {
  return (
    <Fragment>
      <Header title={"DHA DQMC Training Course Questionnaire"} />
      <Body showLinks={false} />
      <Footer />
    </Fragment>
  );
};

export default Questionnaire;
