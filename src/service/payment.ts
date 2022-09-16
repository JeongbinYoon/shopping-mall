import { Bootpay } from "@bootpay/client-js";

interface IResultPaymentInfo {
  price: number;
  order_name: string;
  order_id: number;
  user: {
    id: string;
    username: string;
    phone: string;
    email: string;
  };
  items: [
    {
      id: string;
      name: string;
      qty: number;
      price: number;
    }
  ];
}

export const requestPaymentFn = async ({
  price,
  order_name,
  order_id,
  user,
  items,
}: IResultPaymentInfo) => {
  const response = await Bootpay.requestPayment({
    application_id: "6319cd91d01c7e0020fa3bab",
    price,
    order_name,
    order_id: `${order_id}`,
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
    user,
    items: items,
    extra: {
      open_type: "iframe",
      card_quota: "0,2,3",
      escrow: false,
    },
  });
};
