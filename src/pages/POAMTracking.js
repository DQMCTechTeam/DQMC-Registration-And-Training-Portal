import { Fragment } from "react";
import Body from "../components/UI/Body";
import Header from "../components/UI/Header";
import Footer from '../components/UI/Footer';

const POAMTracking = () => {
  return (
    <Fragment>
      <Header
        title={"DQMC Plan of Action and Milestones (POA&M)"}
      />
      <Body showlinks={false} showPoam={true} />
      <Footer/>
    </Fragment>
  );
};

export default POAMTracking;
