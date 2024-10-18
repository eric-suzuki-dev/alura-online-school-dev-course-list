import Networks from "./Networks";
import Copy from "./Wrapper";
import * as Styled from "./style";

const Footer = () => {
  return (
    <>
      <Styled.Banner>
        <source
          media="(max-width: 360px)"
          srcSet="/images/footer-banner-mobile.png"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="/images/footer-banner-tablet.png"
        />
        <img src="/images/footer-banner-desktop.png" alt="Pessoa sentada na beira da montanha" />
      </Styled.Banner>
      <Styled.Footer>
        <Styled.Container>
          <div>
            <img
              src="/images/logo-footer.svg"
              alt="Logotipo do Jornada milhas"
            />
            <Copy />
          </div>
          <Networks />
        </Styled.Container>
      </Styled.Footer>
    </>
  );
};

export default Footer;
