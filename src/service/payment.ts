import { Bootpay } from "@bootpay/client-js";

export const requestPaymentFn = async () => {
  const response = await Bootpay.requestPayment({
    application_id: "6319cd91d01c7e0020fa3bab",
    price: 1000,
    order_name: "테스트결제",
    order_id: "TEST_ORDER_ID",
    pg: "케이씨피",
    method: [
      "휴대폰",
      "카드",
      "계좌이체",
      "가상계좌",
      "페이코",
      "네이버페이",
      "카카오페이",
    ],
    user: {
      id: "회원아이디",
      username: "정빈",
      phone: "01000000000",
      email: "test@test.com",
    },
    items: [
      {
        id: "item_id",
        name: "테스트아이템",
        qty: 1,
        price: 1000,
      },
    ],
    extra: {
      open_type: "iframe",
      card_quota: "0,2,3",
      escrow: false,
    },
  });
};
