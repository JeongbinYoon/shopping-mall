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

// ?????? ???????????? ?????? ??????
const calcPrice = (price: number, dcRate: number | null) => {
  const resultPrice = dcRate === null ? price : price - (price * dcRate) / 100;
  return resultPrice;
};

// ?????? ?????? ??? ?????? ??????
const totalPrice = (data: any) => {
  let total = 0;
  data.orderItems.map((item: any) => (total += item.price * item.option.qty));
  return total;
};

// // ?????? ?????? ????????? ??????
// const shippingFee = (data: any) => {
//   let total = 0;
//   data.orderItems.map((item: any) =>
//     item.shipping_fee_free ? (total = 3000) : 0
//   );
//   return total;
// };

// ?????? ?????? ??? ?????? ??????
const discountPrice = (data: any) => {
  let total = 0;
  data.orderItems.map(
    (item: any) => (total += (item.price * item.dcRate) / 100)
  );
  return total;
};

// ?????? ?????? ??????
const finalPaymentPrice = (data: any) => {
  // return totalPrice(data) + shippingFee(data) - discountPrice(data);
  return totalPrice(data) - discountPrice(data);
};

// ??????????????? ??????
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
  // ?????? ?????? ????????? ??????
  const location = useLocation();
  let orderData = data;
  useEffect(() => {
    // orderData = location.state.orderData;
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  // ???????????? ?????? ?????? ??? ????????? ?????? ?????? ???????????? ??????
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
      username: "??????2",
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

  // ?????? ??????
  const address = useRecoilValue<IAddress>(addressState);

  // ????????? ??????
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
        <Title>??????/??????</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <UserInfo>
            <Subtitle>?????? ??????</Subtitle>
            <div>
              <ul className="userInfoLists">
                <li>
                  <h4>
                    <span>*</span> ?????? ???
                  </h4>
                  <Input
                    {...register("username", {
                      required: "?????? ?????? ??????????????????",
                      minLength: {
                        value: 2,
                        message: "??? ?????? ?????? ??????????????????",
                      },
                    })}
                  />
                  <ErrorMessage>{errors?.username?.message}</ErrorMessage>
                </li>
                <li>
                  <h4>
                    <span>*</span> ??????
                  </h4>
                  <ul className="addressList">
                    <li>
                      <Input
                        {...register("postcode", {
                          required: true,
                        })}
                        placeholder="????????????"
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
                        placeholder="??????"
                        value={address.address}
                      />
                      <ErrorMessage>{errors?.address?.message}</ErrorMessage>
                    </li>
                    <li>
                      <Input
                        {...register("detailAddress", {
                          required: "??????????????? ??????????????????",
                        })}
                        className="adrressInput"
                        placeholder="????????????"
                      />
                      <ErrorMessage>
                        {errors?.detailAddress?.message}
                      </ErrorMessage>
                    </li>
                  </ul>
                </li>
                <li className="number">
                  <h4>
                    <span>*</span> ????????? ??????
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
                      required: "??????????????? ??????????????????",
                      minLength: {
                        value: 4,
                        message: "??????????????? ????????? ??????????????????",
                      },
                      maxLength: {
                        value: 4,
                        message: "??????????????? ????????? ??????????????????",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "??????????????? ????????? ??????????????????",
                      },
                    })}
                    maxLength={4}
                  />
                  <span>-</span>
                  <Input
                    {...register("number3", {
                      required: "??????????????? ??????????????????",
                      minLength: {
                        value: 4,
                        message: "??????????????? ????????? ??????????????????",
                      },
                      maxLength: {
                        value: 4,
                        message: "??????????????? ????????? ??????????????????",
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "??????????????? ????????? ??????????????????",
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
                    <span>*</span> ?????????
                  </h4>
                  <Input
                    {...register("email", {
                      required: "???????????? ??????????????????",
                      pattern: {
                        value:
                          /^^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])$/,
                        message: "???????????? ????????? ??????????????????",
                      },
                    })}
                  />
                  <span>@</span>
                  <Input
                    {...register("email2", {
                      required: "???????????? ??????????????????",
                      pattern: {
                        value: /^([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/,
                        message: "???????????? ????????? ??????????????????",
                      },
                    })}
                    defaultValue={selectedEmail}
                    onChange={emailChange}
                    value={selectedEmail === "????????????" ? email : selectedEmail}
                  />
                  <select onChange={selectEmail}>
                    <option value="????????????">????????????</option>
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
                  <h4>?????? ??????</h4>
                  <Input as="textarea" {...register("message")} />
                </li>
              </ul>
            </div>
          </UserInfo>
          <Result>
            <PrdInfo>
              <Subtitle>?????? ??????</Subtitle>
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
                        {calcPrice(item.price, item.dcRate).toLocaleString()}???
                      </span>
                    </div>
                    <div className="prdQty">
                      <span>{item.option.qty}???</span>
                    </div>
                  </div>
                </div>
              ))}
            </PrdInfo>
            <Payment>
              <Subtitle>?????? ??????</Subtitle>
              <FinalPayment>
                <div>
                  <div>
                    <span>??? ????????????</span>
                    <span>{totalPrice(orderData).toLocaleString()}</span>
                    <span>???</span>
                  </div>
                  <div>
                    <span>?????????</span>
                    {/* <span>+ {shippingFee(orderData).toLocaleString()}</span> */}
                    <span>+ 0</span>
                    <span>???</span>
                  </div>
                  <div>
                    <span>??????</span>
                    <span>- {discountPrice(orderData).toLocaleString()}</span>
                    <span>???</span>
                  </div>
                </div>
                <div>
                  <span>?????? ????????????</span>
                  <span>{finalPaymentPrice(orderData).toLocaleString()}</span>
                  <span>???</span>
                </div>
              </FinalPayment>
              <SubmitBtn type="submit" value={"????????????"} />
            </Payment>
          </Result>
        </Form>
      </Container>
    </>
  );
}
export default Order;
