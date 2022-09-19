import axios from "axios";
import { IJoin, ILogin } from "./atoms";

export const onLogin = async (userInfo: ILogin) => {
  let token;
  await axios
    .post<string>(`http://localhost:8080/login`, userInfo)
    .then((res) => (token = res.headers.authorization));
  return token;
};

export const onJoin = async (userInfo: IJoin): Promise<string> => {
  const { data } = await axios.post<string>(
    `http://localhost:8080/join`,
    userInfo
  );
  return data;
};

// 회원 유무 체크
export const onCheckUser = async (token: any) => {
  const response = await axios //
    .get<any>(`http://localhost:8080/check`, token);

  return response;
};

// 상품정보 불러오기
export const onLoadProduct = async (productId: any) => {
  const { data } = await axios.get(
    "http://localhost:8080/product?id=1",
    productId
  );
};
