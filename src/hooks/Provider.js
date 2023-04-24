import { useState } from "react";
import useApi from "../services/api";
import { useEffect } from "react";

export const Provider = () => {
  const api = useApi();
  const [isValidToken, setIsValidToken] = useState(false);
  useEffect(() => {
    api
      .validateToken()
      .then((response) => setIsValidToken(response.isValidToken));
  }, []);
};
