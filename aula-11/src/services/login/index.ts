import { Login } from "../../typing";
import { ErrorResponse, LoginResponseSuccess } from "./types/response";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const loginService = async (
  login: Login
): Promise<LoginResponseSuccess & ErrorResponse> => {
  const response = await fetch("http://localhost:5000/v1/auth", {
    body: JSON.stringify(login),
    method: "POST",
    headers,
  });
  return await response.json()
};
