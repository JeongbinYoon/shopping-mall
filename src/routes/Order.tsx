import styled from "styled-components";
import Header from "../components/Header";
import { requestPaymentFn } from "../service/payment";
import { useEffect } from "react";
import orderData from "../data/order.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 80px;
  width: 85%;
  /* border: 1px solid #f00; */
`;

const Title = styled.h2`
  margin: 50px 0;
  text-align: center;
  font-size: 24px;
`;

const Subtitle = styled.h3`
  margin: 20px;
  font-size: 20px;
`;

const Form = styled.form``;

const Input = styled.input`
  width: 200px;
  height: 40px;
  margin: 0 5px;
  padding-left: 5px;
  .addressList &.adrressInput {
    width: 400px;
  }
`;

const UserInfo = styled.div`
  border-top: 1px solid #777;
  .subtitle {
    margin: 20px;
    font-size: 20px;
  }
  .userInfoLists {
    margin-left: 30px;
    > li {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-top: 1px solid #ddd;
      .addressList li {
        margin-bottom: 5px;
      }
      .addressList li:last-child {
        margin-bottom: 0;
      }
      &.number {
        select {
          width: 60px;
          height: 40px;
          margin: 0 5px;
          padding-left: 5px;
        }
        ${Input} {
          width: 100px;
        }
      }
    }
    h4 {
      min-width: 200px;
    }
  }
`;

const PrdInfo = styled.div`
  margin-top: 100px;
  border-top: 1px solid #777;
`;
const Payment = styled.div``;

function Order() {
  // 주문 상품 데이터 요청
  const data = orderData;
  return (
    <>
      <Header />
      <Container>
        <Title>주문/결제</Title>
        <Form>
          <UserInfo>
            <Subtitle>배송 정보</Subtitle>
            <div>
              <ul className="userInfoLists">
                <li>
                  <h4>받으시는 분</h4>
                  <Input type="text" />
                </li>
                <li>
                  <h4>주소</h4>
                  <ul className="addressList">
                    <li>
                      <Input type="text" placeholder="우편번호" />
                      <button>우편번호 찾기</button>
                    </li>
                    <li>
                      <Input
                        className="adrressInput"
                        type="text"
                        placeholder="주소"
                      />
                    </li>
                    <li>
                      <Input
                        className="adrressInput"
                        type="text"
                        placeholder="상세주소"
                      />
                    </li>
                  </ul>
                </li>
                <li className="number">
                  <h4>휴대폰 번호</h4>
                  <select name="" id="">
                    <option value="010">010</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                  <span>-</span>
                  <Input type="text" />
                  <span>-</span>
                  <Input type="text" />
                </li>
                <li>
                  <h4>이메일</h4>
                  <Input type="text" />
                  <span>@</span>
                  <Input type="text" />
                </li>
                <li>
                  <h4>배송 메모</h4>
                  <Input as="textarea" />
                </li>
              </ul>
            </div>
          </UserInfo>
          <PrdInfo>
            <Subtitle>상품 정보</Subtitle>
            <div>
              <div className="imgBox">
                <img src={data.imgURL} alt={data.name} />
              </div>
              <div className="prdOption">
                <p>{data.name}</p>
                <p>
                  <span>
                    {data.option.color} / {data.option.size}
                  </span>
                </p>
              </div>
              <div>
                <span>{data.price}</span>
              </div>
            </div>
          </PrdInfo>
          <Payment></Payment>
        </Form>
        <button onClick={requestPaymentFn}>구매하기</button>
      </Container>
    </>
  );
}
export default Order;
