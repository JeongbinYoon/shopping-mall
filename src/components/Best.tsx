import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { bestItemState } from "../atoms";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.textColor2};
  text-align: center;
  text-decoration-line: underline;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 0 50px 0;
  margin-top: 80px;
`;

const Item = styled.div`
  width: 25%;
  padding: 0 1%;
  margin-bottom: 100px;

  img {
    width: 100%;
  }
  .itemName {
    font-size: 14px;
    margin: 20px 0;
  }
  .itemPrice {
    font-size: 12px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  .icons {
    display: flex;
  }
`;

const Icon = styled.span`
  margin-left: 3px;
  padding: 3px 5px;
  font-size: 12px;
  color: #ffffff;
  border-radius: 3px;
  white-space: nowrap;
`;
const BestIcon = styled(Icon)`
  background-color: #bb0909;
`;

const SameDayIcon = styled(Icon)`
  background-color: #3759ee;
`;

function Best() {
  const bestItem = useRecoilValue(bestItemState);
  return (
    <>
      <Title>#best item</Title>
      <Container>
        {bestItem.map((item, idx) => (
          <Item key={idx}>
            <Link to={`/product/${item.product_id}`}>
              <img src={item.imgURL} alt="" />
            </Link>
            <div className="itemName">
              <Link to={`/product/${item.product_id}`}>
                <span>{item.name}</span>
              </Link>
            </div>
            <ItemInfo>
              <span className="itemPrice">KRW 55,000</span>

              <div className="icons">
                {item.category.includes("BEST") ? (
                  <BestIcon>BEST</BestIcon>
                ) : null}
                {item.category.includes("overnightShipping") ? (
                  <SameDayIcon>당일발송</SameDayIcon>
                ) : null}
              </div>
            </ItemInfo>
          </Item>
        ))}
      </Container>
    </>
  );
}

export default Best;
