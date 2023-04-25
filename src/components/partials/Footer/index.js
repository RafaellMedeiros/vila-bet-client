import React from "react";
import { FooterArea, TextArea, Rules, Rights } from "./styled";

const Footer = () => {
  return (
    <FooterArea>
      <TextArea>
        <Rules>
          <a href="/rules">Acesse as regras do Vila Bet</a>
        </Rules>
        <Rights>Todos os direitos reservados à Vila Bet®</Rights>
      </TextArea>
    </FooterArea>
  );
};

export default Footer;
