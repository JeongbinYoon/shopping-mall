import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Main from "./routes/Main";
import Mypage from "./routes/Mypage";
import Order from "./routes/Order";
import Product_detail from "./routes/Product_detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/product/prd=:productId"
          element={<Product_detail />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/order/prd=:productId" element={<Order />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
