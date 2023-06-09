import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { Template } from "./components/MainComponents";
import Header from "./components/partials/Header";
import { LoggedUserProvider } from "./hooks/LoggedUserProvider";

import { Routes } from "./Routes";
import "./App.css";

const Page = (props) => {
  return (
    <BrowserRouter>
      <Template>
        <LoggedUserProvider>
          <Header />

          <Routes />
        </LoggedUserProvider>
      </Template>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
