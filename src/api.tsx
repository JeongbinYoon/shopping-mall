import axios from "axios";
import { IJoin, ILogin } from "./atoms";

export const onLogin = async (userInfo: ILogin): Promise<string> => {
  const { data } = await axios.post<string>(
    // `http://localhost:8080/login`,
    `https://reqres.in/api/login`,
    userInfo
  );
  return data;
};

export const onJoin = async (userInfo: IJoin): Promise<string> => {
  const { data } = await axios.post<string>(
    `http://localhost:8080/join`,
    userInfo
  );
  return data;
};
