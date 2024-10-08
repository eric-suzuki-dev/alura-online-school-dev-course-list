import * as Styled from "./style";
import { Button } from "../Button/index";
import MenuBurguer from "../MenuBurguer";
import logo from "/images/logo-mobile.svg";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.MenuMobile>
        <Styled.LogoMobile
          src={logo}
          alt="ícone de uma bússola, logotipo do site"
        />
        <MenuBurguer />
      </Styled.MenuMobile>

      <Styled.Wrapper>
        <img src="/logo.svg" alt="ícone de uma bússola, logotipo do site" />
        <Styled.Nav>
          <Styled.Link href="#">Vender Milhas</Styled.Link>
          <Styled.Link href="#">Sobre</Styled.Link>
          <Button>Cadastre-se</Button>
          <Button $variant="secundario">Login</Button>
        </Styled.Nav>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Header;
