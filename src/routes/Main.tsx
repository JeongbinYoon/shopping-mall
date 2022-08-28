import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import NewItem from "../components/NewItem";

function Main() {
  return (
    <>
      <Helmet>
        <title>홈</title>
      </Helmet>
      <Header />

      <NewItem />
    </>
  );
}

export default Main;
