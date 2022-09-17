import axios from "axios";
import { IJoin, ILogin } from "./atoms";

export const onLogin = async (userInfo: ILogin)=> {
  let token;
  await axios.post<string>(
    `http://localhost:8080/login`,
    userInfo
  ).then(res=> token = res.headers.authorization);
  return token;
};

export const onJoin = async (userInfo: IJoin): Promise<string> => {
  const { data } = await axios.post<string>(
    `http://localhost:8080/join`,
    userInfo
  );
  return data;
};
