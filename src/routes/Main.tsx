import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import NewItem from "../components/NewItem";
import Best from "../components/Best";
import Discount from "../components/Discount";

function Main() {
  return (
    <>
      <Helmet>
        <title>홈</title>
      </Helmet>
      <Header />
      <Discount />
      <NewItem />
      <Best />
    </>
  );
}

export default Main;
