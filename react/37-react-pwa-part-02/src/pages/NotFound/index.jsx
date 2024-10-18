import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Picture from "../../components/Picture";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 23px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;

const NotFound = () => {
  return (
    <>
      <Header />
      <Picture
        srcMobile="/images/banner2-home-mobile.png"
        srcTablet="/images/banner2-home-tablet.png"
        srcDesktop="/images/banner2-home-desktop.png"
        alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu"
      />
      <Container>
        <Heading>Ops! Página não encontrada! Retorne à tela inicial.</Heading>
        <Picture
          srcMobile="/images/not-found-mobile.png"
          srcTablet="/images/not-found-tablet.png"
          srcDesktop="/images/not-found-tablet.png"
          alt="Mulher aventureira com mochila nas costas. Ao fundo cidade de Machu Pichu"
        />
      </Container>
      <Footer />
    </>
  );
};

export default NotFound;
