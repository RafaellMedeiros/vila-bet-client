/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../services/api";
import { useLoggedUser } from "../hooks/LoggedUserProvider";

export default () => {
  const api = useApi();
  const history = useNavigate();
  const { setIsValidToken } = useLoggedUser();
  useEffect(() => {
    const doLogout = async () => {
      setIsValidToken({});
      await api.logout();
      history("/");
    };
    doLogout();
  }, []);
  return null;
};
