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
import Restart from "./pages/Restart";
import Ranking from "./pages/Ranking";
import Ticket from "./pages/Ticket";

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/admin",
      element: (
        <Protected>
          <Admin />
        </Protected>
      ),
    },
    {
      path: "/admin/analise",
      element: (
        <Protected>
          <Analysis />
        </Protected>
      ),
    },
    {
      path: "/admin/cadrep",
      element: (
        <Protected>
          <CadSeller />
        </Protected>
      ),
    },
    {
      path: "/admin/jogos",
      element: (
        <Protected>
          <GamesWeek />
        </Protected>
      ),
    },
    {
      path: "/admin/resultados",
      element: (
        <Protected>
          <Results />
        </Protected>
      ),
    },
    {
      path: "/admin/zerar",
      element: (
        <Protected>
          <Restart />
        </Protected>
      ),
    },
    {
      path: "/admin/ranking",
      element: (
        <Protected>
          <Ranking />
        </Protected>
      ),
    },
    {
      path: "/apostas",
      element: (
        <Protected>
          <Bets />
        </Protected>
      ),
    },
    { path: "/apostas/confirmacao/:id", element: <Confirmation /> },
    { path: "/logout", element: <Logout /> },
    { path: "/ticket/:id", element: <Ticket /> },
    { path: "*", element: <NotFound /> },
  ]);
};
