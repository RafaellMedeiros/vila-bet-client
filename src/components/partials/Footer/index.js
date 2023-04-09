import React from "react";
import { FooterArea, TextArea, Devs, Rights } from "./styled";

const Footer = () => {
  return (
    <FooterArea>
      <TextArea>
        <Devs>Desenvolvido por:</Devs>
        <Rights>Todos os direitos reservados®</Rights>
      </TextArea>
    </FooterArea>
  );
};

export default Footer;
