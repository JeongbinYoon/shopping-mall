import styled from "styled-components";
import Header from "../components/Header";
import { requestPaymentFn } from "../service/payment";
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

const Result = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
`;

const PrdInfo = styled.div`
  width: 70%;
  border-top: 1px solid #777;
  > div {
    display: flex;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    .options {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .imgBox {
      min-width: 100px;
      height: 100px;
      overflow: hidden;
      object-fit: cover;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .prdName {
      margin-bottom: 10px;
    }
    .prdColorSize {
      color: ${(props) => props.theme.textColor2};
      font-size: 14px;
    }
    .prdPrice {
      margin-left: auto;
      margin-right: 10%;
      font-size: 20px;
    }
    .prdQty {
      margin-right: 5%;
    }
  }
`;

const Payment = styled.div`
  width: 30%;
  border-top: 1px solid #777;
  margin-left: 5%;
`;

const FinalPayment = styled.div`
  padding: 30px;
  border: 1px solid #ddd;
  background-color: #fafafa;
  > div:first-child {
    border-bottom: 1px solid #ccc;
  }
  > div:last-child {
    display: flex;
    align-items: center;
    padding-top: 30px;
    span:nth-child(2) {
      margin-left: auto;
      margin-top: -5px;
      color: #f86364;
      font-size: 28px;
      font-weight: 700;
    }
    span:nth-child(3) {
      color: #f86364;
    }
  }
  > div > div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    span:nth-child(2) {
      margin-left: auto;
      margin-top: -5px;
      font-size: 20px;
      font-weight: 700;
    }
  }
`;

const SubmitBtn = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background-color: ${(props) => props.theme.pointColor};
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

// 개별 상품정보 최종 가격
const calcPrice = (price: number, dcRate: number | null) => {
  const resultPrice = dcRate === null ? price : price - (price * dcRate) / 100;
  return resultPrice;
};

// 결제 정보 총 상품 금액
const totalPrice = (data: any) => {
  let total = 0;
  data.orderItems.map((item: any) => (total += item.price * item.option.qty));
  return total;
};

// 결제 정보 배송비 유무
const shippingFee = (data: any) => {
  let total = 0;
  data.orderItems.map((item: any) =>
    item.shipping_fee_free ? (total = 3000) : 0
  );
  return total;
};

// 결제 정보 총 할인 금액
const discountPrice = (data: any) => {
  let total = 0;
  data.orderItems.map(
    (item: any) => (total += (item.price * item.dcRate) / 100)
  );
  return total;
};

// 최종 결제 금액
const finalPaymentPrice = (data: any) => {
  return totalPrice(data) + shippingFee(data) - discountPrice(data);
};

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
          <Result>
            <PrdInfo>
              <Subtitle>상품 정보</Subtitle>
              {data.orderItems.map((item) => (
                <div key={item.product_id}>
                  <div className="imgBox">
                    <img src={item.imgURL} alt={item.name} />
                  </div>
                  <div className="options">
                    <div className="prdOption">
                      <p className="prdName">{item.name}</p>
                      <p className="prdColorSize">
                        <span>
                          {item.option.color} / {item.option.size}
                        </span>
                      </p>
                    </div>
                    <div className="prdPrice">
                      <span>
                        {calcPrice(item.price, item.dcRate).toLocaleString()}원
                      </span>
                    </div>
                    <div className="prdQty">
                      <span>{item.option.qty}개</span>
                    </div>
                  </div>
                </div>
              ))}
            </PrdInfo>
            <Payment>
              <Subtitle>결제 정보</Subtitle>
              <FinalPayment>
                <div>
                  <div>
                    <span>총 상품금액</span>
                    <span>{totalPrice(data).toLocaleString()}</span>
                    <span>원</span>
                  </div>
                  <div>
                    <span>배송비</span>
                    <span>+ {shippingFee(data).toLocaleString()}</span>
                    <span>원</span>
                  </div>
                  <div>
                    <span>할인</span>
                    <span>- {discountPrice(data).toLocaleString()}</span>
                    <span>원</span>
                  </div>
                </div>
                <div>
                  <span>최종 결제금액</span>
                  <span>{finalPaymentPrice(data).toLocaleString()}</span>
                  <span>원</span>
                </div>
              </FinalPayment>
              <SubmitBtn type="submit" value={"결제하기"} />
            </Payment>
          </Result>
        </Form>
      </Container>
    </>
  );
}
export default Order;
