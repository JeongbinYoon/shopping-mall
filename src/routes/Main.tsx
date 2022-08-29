import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import NewItem from "../components/NewItem";
import Best from "../components/Best";

function Main() {
  return (
    <>
      <Helmet>
        <title>홈</title>
      </Helmet>
      <Header />

      <NewItem />
      <Best />
    </>
  );
}

export default Main;
