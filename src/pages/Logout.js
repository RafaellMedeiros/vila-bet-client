/* eslint-disable import/no-anonymous-default-export */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../services/api";

export default () => {
  const api = useApi();
  const history = useNavigate();
  useEffect(() => {
    const doLogout = async () => {
      await api.logout();
      history("/");
    };
    doLogout();
  }, []);
  return null;
};
