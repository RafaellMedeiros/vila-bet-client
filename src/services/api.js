/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
const baseUrl = "http://localhost:5000";

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase();
  let fullUrl = `${baseUrl}${endpoint}`;
  let body = null;
  switch (method) {
    default:
      break;
    case "get":
      let queryString = new URLSearchParams(params).toString();
      fullUrl += `?${queryString}`;
      break;
    case "post":
    case "put":
    case "delet":
      body = JSON.stringify(params);
      break;
  }
  let headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  let req = await fetch(fullUrl, { method, headers, body });
  let json = await req.json();
  return json;
};

export default () => {
  return {
    getToken: () => {
      return localStorage.getItem("token");
    },
    validateToken: /* async */ () => {
      let token = localStorage.getItem("token");
      /* let json = await request("post", "/auth/validate", {}, token);
      return json; */
      if (token === "abc" || token === "defg") {
        return true;
      } else {
        return false;
      }
    },
    login: async (email, password) => {
      let json = await request("post", "/login", { email, password });
      return json;
    },
    logout: async () => {
      let token = localStorage.getItem("token");
      /* let json = await request("post", "/auth/logout", {}, token); */ // invalida o token no back-end
      localStorage.removeItem("token");
      return /* json */;
    },
  };
};
