/* eslint-disable import/no-anonymous-default-export */
const baseUrl = "https://vila-bet-api.herokuapp.com/";

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
    case "delete":
      body = JSON.stringify(params);
      break;
    case "getBody":
      body = JSON.stringify(params);
      method = "get";
      break;
  }
  let headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = token;
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
    validateToken: async () => {
      let token = localStorage.getItem("token");
      let json = await request("post", "auth/validate", {}, token);
      return json;
    },
    login: async (email, password) => {
      let json = await request("post", "auth/autenticate", {
        email,
        password,
      });
      return json;
    },
    logout: async () => {
      localStorage.removeItem("token");
    },
    cadSeller: async (
      name,
      email,
      last_name,
      telephone,
      CPF,
      address,
      password
    ) => {
      let token = localStorage.getItem("token");
      let json = await request(
        "post",
        "auth/register",
        {
          name,
          email,
          last_name,
          telephone,
          CPF,
          address,
          password,
        },
        token
      );
      return json;
    },
    getUser: async () => {
      let token = localStorage.getItem("token");
      let json = await request("get", "auth/user", {}, token);
      return json;
    },
    gamesWeek: async (gamesWeek, dateLimit) => {
      const object = { gamesWeek, dataLimit: dateLimit.toString() };
      let token = localStorage.getItem("token");
      let json = await request(
        "post",
        "games-week/new-games-week",
        object,
        token
      );
      return json;
    },
    getGamesWeek: async () => {
      let token = localStorage.getItem("token");
      let json = await request("get", "games-week", {}, token);
      return json;
    },
    sendBet: async (data) => {
      const object = {
        results: data.games,
        punter: {
          name: data.name,
          telephone: data.phone,
          address: data.address,
          cpf: data.seller.sellerId,
        },
      };
      let token = localStorage.getItem("token");
      let json = await request("post", "games/new-game", object, token);

      return json;
    },
    getBet: async (id) => {
      let token = localStorage.getItem("token");
      let json = await request("get", "games/my", { id }, token);
      return json;
    },
    sendResultsWeek: async (data) => {
      let token = localStorage.getItem("token");
      let json = await request(
        "post",
        "games-week/result-games-week",
        { results: data },
        token
      );

      return json;
    },
    getAnalysis: async (id, seller, date) => {
      let token = localStorage.getItem("token");
      let json = await request("get", "analysis/", { id, seller, date }, token);
      return json;
    },
    getAllUsers: async () => {
      let token = localStorage.getItem("token");
      let json = await request("get", "analysis/allusers", {}, token);
      return json;
    },
    getRanking: async () => {
      let token = localStorage.getItem("token");
      let json = await request("get", "analysis/ranking", {}, token);
      return json;
    },
    restartWeek: async (email, password) => {
      let token = localStorage.getItem("token");
      let json = await request(
        "delete",
        "games-week",
        { email, password },
        token
      );
      return json;
    },
  };
};
