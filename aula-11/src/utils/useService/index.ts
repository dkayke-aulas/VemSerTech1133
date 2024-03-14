import axios from "axios";

const useService = () => {
  const instance = axios.create();

  instance.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Authorization"] = sessionStorage.getItem("@token") ?? "";
    return config;
  });

  const post = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body?: Body
  ) => instance.post<Response>(url, body);

  const patch = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body?: Body
  ) => instance.patch<Response>(url, body);

  const get = <Response = unknown>(url: string) => instance.get<Response>(url);

  const del = <Body = Record<string, unknown>, Response = unknown>(
    url: string,
    body?: Body
  ) => instance.delete<Response>(url, {
    data: body
  });

  return {
    post,
    get,
    del,
    patch
  };
};

export { useService };
