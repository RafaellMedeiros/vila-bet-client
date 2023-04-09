import React, { useState } from "react";
import { HeaderArea, LogoItem, Title, UserArea, LogOut } from "./styled";
import LogoImage from "./assets/logo.png";
import TitleImage from "./assets/name.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  const handleLogout = () => {
    history("/logout");
  };
  return (
    <HeaderArea>
      <LogoItem src={LogoImage} />
      <Title src={TitleImage} />
      <UserArea>
        <LogOut onClick={handleLogout}>Sair</LogOut>
      </UserArea>
    </HeaderArea>
  );
};

export default Header;
