import { useParams } from "react-router-dom";

function Product_detail() {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
}

export default Product_detail;
