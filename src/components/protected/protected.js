import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useApi from "../../services/api";
import { useLoggedUser } from "../../hooks/LoggedUserProvider";

const Protected = ({ children }) => {
  const api = useApi();

  const [data, setData] = useState({});
  const { isValidToken, setIsValidToken } = useLoggedUser();
  useEffect(() => {
    api.validateToken().then((response) => {
      setIsValidToken(response);
      console.log(response);
    });
  }, []);

  if (isValidToken?.error) {
    return <Navigate to="/" replace />;
  }

  if (isValidToken?.isValid) {
    return <>{children}</>;
  }
};

export default Protected;
