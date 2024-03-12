import { Login } from "../../typing";
import { useService } from "../../utils/useService";
import { ErrorResponse, LoginResponseSuccess } from "./types/response";

// const headers = new Headers();
// headers.append("Content-Type", "application/json");

export const useLoginService = () => {
  const { post } = useService();

  const loginService = async (
    login: Login
  ): Promise<LoginResponseSuccess & ErrorResponse> => {
    const response = await post<Login>("http://localhost:5000/v1/auth", login);
    return response.data;
  };

  return {
    loginService
  }

  // const response = await fetch("http://localhost:5000/v1/auth", {
  //   body: JSON.stringify(login),
  //   method: "POST",
  //   headers,
  // });
  // return await response.json()
};
