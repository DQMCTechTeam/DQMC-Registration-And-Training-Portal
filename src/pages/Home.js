import { Fragment } from "react";
import Body from "../components/UI/Body";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header
        title={"Data Quality Training Registration and Information 2021"}
      />
      <Body showlinks={true} />
      <Footer />
    </Fragment>
  );
};

export default Home;
