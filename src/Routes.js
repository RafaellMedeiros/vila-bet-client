import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

import Admin from "./pages/Admin";
import Analysis from "./pages/Analysis";
import CadSeller from "./pages/CadSeller";
import GamesWeek from "./pages/GamesWeek";
import Results from "./pages/Results";
import Bets from "./pages/Bets";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";
import Protected from "./components/protected/protected";
import Logout from "./pages/Logout";
import useApi from "./services/api";

export const Routes = () => {
  const api = useApi();
  const isLogged = api.validateToken();
  console.log("islogged: ", isLogged);

  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/admin",
      element: (
        <Protected isLogged={isLogged}>
          <Admin />
        </Protected>
      ),
    },
    {
      path: "/admin/analise",
      element: (
        <Protected isLogged={isLogged}>
          <Analysis />
        </Protected>
      ),
    },
    {
      path: "/admin/cadrep",
      element: (
        <Protected isLogged={isLogged}>
          <CadSeller />
        </Protected>
      ),
    },
    {
      path: "/admin/jogos",
      element: (
        <Protected isLogged={isLogged}>
          <GamesWeek />
        </Protected>
      ),
    },
    {
      path: "/admin/resultados",
      element: (
        <Protected isLogged={isLogged}>
          <Results />
        </Protected>
      ),
    },
    {
      path: "/apostas",
      element: (
        <Protected isLogged={true}>
          {" "}
          {/* lembrar de voltar pra islogged */}
          <Bets />
        </Protected>
      ),
    },
    { path: "/apostas/confirmacao", element: <Confirmation /> },
    { path: "/logout", element: <Logout /> },
    { path: "*", element: <NotFound /> },
  ]);
};
