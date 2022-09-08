import axios from "axios";
import { ILogin } from "./atoms";
export const login = async (userInfo: ILogin): Promise<string> => {
  const { data } = await axios.post<string>(
    `https://reqres.in/api/register`,
    userInfo
  );
  return data;
};
