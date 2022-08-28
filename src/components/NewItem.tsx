import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 80px;
  border: 1px solid #f00;
  overflow: auto hidden;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.textColor2};
  text-align: center;
  text-decoration-line: underline;
  font-size: 16px;
  text-transform: uppercase;
  padding: 20px 0 50px 0;
`;

const Slider = styled.div`
  overflow: auto hidden;
`;

const Items = styled.ul`
  width: 170%;
  display: flex;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-right: 15px;
  &:last-child {
    margin: 0;
  }
  img {
    width: 100%;
  }
  a {
    width: fit-content;
  }
  .itemName {
    display: inline-block;
    font-size: 14px;
    margin: 15px 0;
  }
  .itemPrice {
    font-size: 12px;
  }
`;

// const Items = () => {};

function NewItem() {
  return (
    <Container>
      <Title>#new arrivals</Title>
      <Slider>
        <Items>
          <Item>
            <Link to={"/"}>
              <img src="./test.jpg" alt="" />
            </Link>

            <Link to={"/"}>
              <span className="itemName">아이템 이름</span>
            </Link>

            <span className="itemPrice">KRW 35,000</span>
          </Item>
          <Item>
            <img src="./test.jpg" alt="" />
            <span className="itemName">아이템 이름</span>
            <span className="itemPrice">KRW 35,000</span>
          </Item>
          <Item>
            <img src="./test.jpg" alt="" />
            <span className="itemName">아이템 이름</span>
            <span className="itemPrice">KRW 35,000</span>
          </Item>
          <Item>
            <img src="./test.jpg" alt="" />
            <span className="itemName">아이템 이름</span>
            <span className="itemPrice">KRW 35,000</span>
          </Item>
          <Item>
            <img src="./test.jpg" alt="" />
            <span className="itemName">아이템 이름</span>
            <span className="itemPrice">KRW 35,000</span>
          </Item>
          <Item>
            <img src="./test.jpg" alt="" />
            <span className="itemName">아이템 이름</span>
            <span className="itemPrice">KRW 35,000</span>
          </Item>
        </Items>
      </Slider>
    </Container>
  );
}

export default NewItem;
