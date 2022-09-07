import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  width: 50%;
  overflow: auto;
  .orderListContainer {
    display: flex;
    align-items: center;
    height: 150px;
    padding: 0 20px;
  }
`;

const Subtitle = styled.h4`
  margin-bottom: 15px;
  font-weight: 700;
`;

const OrderList = styled.ul`
  display: flex;
  li {
    width: 20%;
    overflow: hidden;
    object-fit: cover;
    a {
      display: flex;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .more {
      position: relative;
    }
    .shadow {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 20px;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      span {
        margin-top: 10px;
      }
    }
  }
`;

function RecentOrderList() {
  return (
    <Section>
      <Subtitle>진행 중인 주문</Subtitle>
      <div className="orderListContainer">
        <OrderList>
          <li>
            <Link to={"1"}>
              <img
                src="https://img.nstationmall.com/mall//goods/000/000/002/125/1.jpg?updated_at=20220830145426"
                alt="상품이름"
              />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://img.nstationmall.com/mall//goods/000/000/002/125/1.jpg?updated_at=20220830145426"
                alt="상품이름"
              />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://img.nstationmall.com/mall//goods/000/000/002/125/1.jpg?updated_at=20220830145426"
                alt="상품이름"
              />
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <img
                src="https://img.nstationmall.com/mall//goods/000/000/002/125/1.jpg?updated_at=20220830145426"
                alt="상품이름"
              />
            </Link>
          </li>
          <li>
            <Link className={"more"} to={"#"}>
              <div className={"shadow"}>
                <FontAwesomeIcon icon={faPlus} />
                <span>더보기</span>
              </div>
              <img
                src="https://img.nstationmall.com/mall//goods/000/000/002/125/1.jpg?updated_at=20220830145426"
                alt="상품이름"
              />
            </Link>
          </li>
        </OrderList>
      </div>
    </Section>
  );
}

export default RecentOrderList;
