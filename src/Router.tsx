import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
