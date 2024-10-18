import * as Styled from "./style";

const Hero = () => {
  return (
    <Styled.Container>
      <Styled.Title1>Compartilhe milhas, compartilhe o mundo</Styled.Title1>
      <Styled.Banner>
        <source
          media="(max-width: 360px)"
          srcSet="/images/banner-home-mobile.png"
        />
        <source
          media="(max-width: 768px)"
          srcSet="/images/banner-home-tablet.png"
        />
        <img src="/images/banner-home-desktop.png" alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu" />
      </Styled.Banner>
    </Styled.Container>
  );
};

export default Hero;
