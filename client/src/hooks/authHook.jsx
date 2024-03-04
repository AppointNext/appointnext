import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const useRequireAuth = () => {
  const [cookies] = useCookies(["refresh_token"]);
  const navigate = useNavigate();
  console.log(cookies.token);

  useEffect(() => {
    if (!cookies.refresh_token) {
      navigate("/login");
    }
  }, [cookies.refreshToken, navigate]);

  return cookies.refreshToken;
};

export default useRequireAuth;
