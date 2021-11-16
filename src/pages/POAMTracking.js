import { Fragment } from "react";
import Body from "../components/UI/Body";
import Header from "../components/UI/Header";
import Footer from '../components/UI/Footer';

const POAMTracking = () => {
  return (
    <Fragment>
      <Header
        title={"POAM 2021"}
      />
      <Body showlinks={false} />
      <Footer/>
    </Fragment>
  );
};

export default POAMTracking;
