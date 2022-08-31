import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

interface RouteState {
  item: {
    product_id: number;
    imgURL: string;
    name: string;
    price: number;
    discountRate?: number;
    color: string[];
    size: string[];
    category: string[];
    summary: string;
    create_date: number;
    update_date?: number;
  };
}

const Container = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
  border: 1px solid #f00;
`;

const DetailArea = styled.div``;

const PrdDetail = styled.div``;

function Product_detail() {
  //   const location = useLocation();
  //   console.log(location);
  const location = useLocation();
  const state = location.state as RouteState;
  const { item } = state;
  return (
    <Container>
      <DetailArea>
        <div className="imgBox">
          <img src={item.imgURL} alt="" />
        </div>
      </DetailArea>
      <PrdDetail></PrdDetail>
    </Container>
  );
}

export default Product_detail;
