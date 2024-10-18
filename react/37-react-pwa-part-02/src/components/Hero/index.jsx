import Picture from "../Picture/index";
import * as Styled from "./style";

const Hero = () => {
  return (
    <Styled.Container>
      <Styled.Title1>Compartilhe milhas, compartilhe o mundo</Styled.Title1>
      <Picture
        srcMobile="/images/banner-home-mobile.png"
        srcTablet="/images/banner-home-tablet.png"
        srcDesktop="/images/banner-home-desktop.png"
        alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu"
      />
    </Styled.Container>
  );
};

export default Hero;
