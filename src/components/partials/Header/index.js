import React from "react";
import { HeaderArea, LogoItem, Title, UserArea, LogOut } from "./styled";
import LogoImage from "./assets/logo.png";
import TitleImage from "./assets/name.png";
import { useNavigate } from "react-router-dom";
import { useLoggedUser } from "../../../hooks/LoggedUserProvider";

const Header = () => {
  const history = useNavigate();
  const { isValidToken } = useLoggedUser();
  const handleLogout = () => {
    history("/logout");
  };
  const teste = isValidToken.isValid;
  const hasToken = () => {
    if (localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  };
  console.log(isValidToken);

  return (
    <HeaderArea>
      <LogoItem src={LogoImage} />
      <Title src={TitleImage} />
      <UserArea>
        {teste && <LogOut onClick={handleLogout}>Sair</LogOut>}
      </UserArea>
    </HeaderArea>
  );
};

export default Header;
