import * as Styled from "./style";
import { Button } from "../Button";
import { useState } from "react";

const MenuBurguer = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  };

  return (
    <>
      <Styled.Menu onClick={toggle}>
        <img src="/images/burguer-menu.svg" alt="ícone do menu hamburguer" />
      </Styled.Menu>
      {isOpen && (
        <>
          <Styled.Overflow />
          <Styled.Nav>
            <Styled.List>
              <Styled.ListItem>
                <Styled.Link href="#">Página inicial</Styled.Link>
                <Styled.Divisor />
              </Styled.ListItem>
              <Styled.ListItem>
                <Styled.Link href="#">Vender milhas</Styled.Link>
                <Styled.Divisor />
              </Styled.ListItem>
              <Styled.ListItem>
                <Styled.Link href="#">Sobre</Styled.Link>
                <Styled.Divisor />
              </Styled.ListItem>
            </Styled.List>
            <Styled.Wrapper>
              <Button $variant="secundario">Login</Button>
              <Button>Cadastre-se</Button>
            </Styled.Wrapper>
          </Styled.Nav>
        </>
      )}
    </>
  );
};

export default MenuBurguer;
