import * as Styled from "./styles";
import Picture from "../../components/Picture";

const ReserveComplete = () => {
  return (
    <>
      <Picture
        srcMobile="/images/reserve-complete-mobile.png"
        srcTablet="/images/reserve-complete-tablet.png"
        srcDesktop="/images/reserve-complete-desktop.png"
        alt="Imagem do céu azul com nuvems brancas"
      />
      <Styled.Wrapper>
        <Styled.Link to={`/`}>&larr; Voltar ao início</Styled.Link>
        <Picture
          srcMobile="/images/reserve-complete.png"
          srcTablet="/images/reserve-complete.png"
          srcDesktop="/images/reserve-complete.png"
          alt="Casal negro de malas e mãos dadas, viajando"
        />
        <Styled.Heading>Reserva concluída com sucesso.</Styled.Heading>
        <Styled.Description>
          Uhuuuul, prepare suas malas pois a compra foi confirmada e o seu
          próximo destino já está programado!{" "}
        </Styled.Description>
      </Styled.Wrapper>
    </>
  );
};

export default ReserveComplete;
