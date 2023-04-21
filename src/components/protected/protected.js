import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useApi from "../../services/api";

const Protected = ({ children }) => {
  const api = useApi();

  const [data, setData] = useState({});
  useEffect(() => {
    api.validateToken().then((response) => {
      setData(response);
    });
  }, []);

  if (data?.error) {
    return <Navigate to="/" replace />;
  }

  if (data?.isValid) {
    return <>{children}</>;
  }
};

export default Protected;
