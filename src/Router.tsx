import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Product_detail from "./routes/Product_detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id" element={<Product_detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
