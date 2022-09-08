import { requestPaymentFn } from "../service/payment";

function Order() {
  return (
    <div>
      <button onClick={requestPaymentFn}>결제하기</button>
    </div>
  );
}
export default Order;
