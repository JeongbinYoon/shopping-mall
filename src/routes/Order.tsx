import styled from "styled-components";
import Header from "../components/Header";
import { requestPaymentFn } from "../service/payment";
import data from "../data/order.json";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { IAddress, addressState } from "../atoms";
import Postcode from "../components/Postcode";
import { useLocation } from "react-router-dom";

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
  padding: 0%;
  padding-left: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  .addressList &.adrressInput {
    width: 400px;
  }

  &:focus {
    border: none;
    outline: 1px solid ${(props) => props.theme.pointColor};
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
      &.emailArea {
        select {
          height: 40px;
          margin-right: 5px;
          color: ${(props) => props.theme.textColor};
          border: 1px solid ${(props) => props.theme.borderColor};
          border-radius: 3px;
          &:focus {
            outline: 1px solid ${(props) => props.theme.pointColor};
          }
        }
      }

      .addressList li {
        display: flex;
        align-items: center;
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
          border: 1px solid ${(props) => props.theme.borderColor};
          border-radius: 3px;
          &:focus {
            outline: 1px solid ${(props) => props.theme.pointColor};
          }
        }
        ${Input} {
          width: 100px;
        }
      }
    }
    h4 {
      min-width: 200px;
      span {
        color: #f86364;
      }
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

const ErrorMessage = styled.span`
  color: #f86364;
  font-size: 14px;
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

// // 결제 정보 배송비 유무
// const shippingFee = (data: any) => {
//   let total = 0;
//   data.orderItems.map((item: any) =>
//     item.shipping_fee_free ? (total = 3000) : 0
//   );
//   return total;
// };

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
  // return totalPrice(data) + shippingFee(data) - discountPrice(data);
  return totalPrice(data) - discountPrice(data);
};

// 에러메세지 타입
interface IForm {
  username: string;
  postcode: string;
  address: string;
  detailAddress: string;
  number: string;
  number2: string;
  number3: string;
  email: string;
  email2: string;
  message: string;
}

function Order() {
  // 주문 상품 데이터 요청
  const location = useLocation();
  let orderData: any;
  useEffect(() => {
    orderData = location.state.orderData;
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  // 결제하기 버튼 클릭 시 유효성 검사 모두 통과했을 경우
  const onValid = (data: any) => {
    console.log(data);
    // totalPrice
    let totalPrice = finalPaymentPrice(orderData);

    // order_name
    let totalItemName = "";
    orderData.orderItems.map((item) => (totalItemName += `${item.name}, `));

    totalItemName = totalItemName.replace(/, $/, "");

    // order_id
    const order_id = orderData.order_id;

    // user
    const user = {
      id: "user02",
      username: "이름2",
      phone: `${data.number}${data.number2}${data.number3}`,
      email: `${data.email}@${data.email2}`,
      addr: `${data.address} ${data.address} ${data.detailAddress}`,
    };

    // items
    const items: any = [];
    orderData.orderItems.map((item) =>
      items.push({
        id: item.product_id,
        name: item.name,
        qty: item.option.qty,
        price: item.dcRate
          ? item.price - (item.price * item.dcRate) / 100
          : item.price,
      })
    );

    // result
    const result = {
      price: totalPrice,
      order_name: totalItemName,
      order_id,
      user,
      items,
    };

    console.log(result);
    // requestPaymentFn(result);
  };

  // 주소 찾기
  const address = useRecoilValue<IAddress>(addressState);

  // 이메일 선택
  const [selectedEmail, setSelectedEmail] = useState();

  const selectEmail = (e: any) => {
    setSelectedEmail(e.target.value);
    console.log(e.target.value);
  };
  const [email, setEmail] = useState("");
  const emailChange = (e: any) => {
    setEmail(e.target.value);
  };

  console.log(errors);
  return (
    <>
      <Header />
      <Container>
        <Title>주문/결제</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <UserInfo>
            <Subtitle>배송 정보</Subtitle>
            <div>
              <ul className="userInfoLists">
                <li>
                  <h4>
                    <span>*</span> 받는 분
                  </h4>
                  <Input
                    {...register("username", {
                      required: "받는 분을 입력해주세요",
                      minLength: {
                        value: 2,
                        message: "두 글자 이상 입력해주세요",
                      },
                    })}
                  />
                  <ErrorMessage>{errors?.username?.message}</ErrorMessage>
                </li>
                <li>
                  <h4>
                    <span>*</span> 주소
                  </h4>
                  <ul className="addressList">
                    <li>
                      <Input
                        {...register("postcode", {
                          required: true,
                        })}
                        placeholder="우편번호"
                        value={address.zonecode}
                      />
                      <Postcode />
                      <ErrorMessage>{errors?.postcode?.message}</ErrorMessage>
                    </li>
                    <li>
                      <Input
                        {...register("address", {
                          required: true,
                        })}
                        className="adrressInput"
                        placeholder="주소"
                        value={address.address}
                      />
                      <ErrorMessage>{errors?.address?.message}</ErrorMessage>
                    </li>
                    <li>
                      <Input
                        {...register("detailAddress", {
                          required: "상세주소를 입력해주세요",
                        })}
                        className="adrressInput"
                        placeholder="상세주소"
                      />
                      <ErrorMessage>
                        {errors?.detailAddress?.message}
                      </ErrorMessage>
                    </li>
                  </ul>
                </li>
                <li className="number">
                  <h4>
                    <span>*</span> 휴대폰 번호
                  </h4>
                  <select {...register("number")}>
                    <option value="010">010</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                  <span>-</span>
                  <Input
                    {...register("number2", {
                      required: "전화번호를 입력해주세요",
                      minLength: {
                        value: 4,
                        message: "전화번호를 정확히 입력해주세요",
                      },
                      maxLength: {
                        value: 4,
                        message: "전화번호를 정확히 입력해주세요",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "전화번호를 정확히 입력해주세요",
                      },
                    })}
                    maxLength={4}
                  />
                  <span>-</span>
                  <Input
                    {...register("number3", {
                      required: "전화번호를 입력해주세요",
                      minLength: {
                        value: 4,
                        message: "전화번호를 정확히 입력해주세요",
                      },
                      maxLength: {
                        value: 4,
                        message: "전화번호를 정확히 입력해주세요",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "전화번호를 정확히 입력해주세요",
                      },
                    })}
                    maxLength={4}
                  />
                  <ErrorMessage>
                    {errors?.number2?.message ?? errors?.number3?.message}
                  </ErrorMessage>
                </li>
                <li className="emailArea">
                  <h4>
                    <span>*</span> 이메일
                  </h4>
                  <Input
                    {...register("email", {
                      required: "이메일을 입력해주세요",
                      pattern: {
                        value:
                          /^^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])$/,
                        message: "이메일을 정확히 입력해주세요",
                      },
                    })}
                  />
                  <span>@</span>
                  <Input
                    {...register("email2", {
                      required: "이메일을 입력해주세요",
                      pattern: {
                        value: /^([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/,
                        message: "이메일을 정확히 입력해주세요",
                      },
                    })}
                    defaultValue={selectedEmail}
                    onChange={emailChange}
                    value={selectedEmail === "직접입력" ? email : selectedEmail}
                  />
                  <select onChange={selectEmail}>
                    <option value="직접입력">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="nate.com">nate.com</option>
                    <option value="hanmail.com">hanmail.com</option>
                  </select>
                  <ErrorMessage>
                    {errors?.email?.message ?? errors?.email2?.message}
                  </ErrorMessage>
                </li>
                <li>
                  <h4>배송 메모</h4>
                  <Input as="textarea" {...register("message")} />
                </li>
              </ul>
            </div>
          </UserInfo>
          <Result>
            <PrdInfo>
              <Subtitle>상품 정보</Subtitle>
              {orderData.orderItems.map((item) => (
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
                    <span>{totalPrice(orderData).toLocaleString()}</span>
                    <span>원</span>
                  </div>
                  <div>
                    <span>배송비</span>
                    {/* <span>+ {shippingFee(orderData).toLocaleString()}</span> */}
                    <span>+ 0</span>
                    <span>원</span>
                  </div>
                  <div>
                    <span>할인</span>
                    <span>- {discountPrice(orderData).toLocaleString()}</span>
                    <span>원</span>
                  </div>
                </div>
                <div>
                  <span>최종 결제금액</span>
                  <span>{finalPaymentPrice(orderData).toLocaleString()}</span>
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
