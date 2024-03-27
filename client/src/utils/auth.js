import Cookies from "js-cookie";
import { useSelector } from "react-redux";

export const isAuthenticated = () => {
  const accessToken = Cookies.get("accessToken");
  return accessToken ? true : false;
};

export const logout = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};
