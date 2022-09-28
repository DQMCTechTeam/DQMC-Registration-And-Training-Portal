import { Fragment } from "react";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";
import Footer from "../components/UI/Footer";
const PoamCenValid=()=>{

return (
    <Fragment>
      <Header
        title={"Data Quality Training Registration and Information 2021"}
      />
      <Body showLinks={false} showPoamCenValid={true} showDQMCTrainingRegistration={false} />

      <Footer />
    </Fragment>
);
}

export default PoamCenValid;