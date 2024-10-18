/* eslint-disable react/prop-types */
import CardPromo from "../CardPromo";
import * as Styled from "./style";

const PromoStyledection = ({ cards }) => {
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title>Promoções</Styled.Title>
        <Styled.Wrapper>
          {cards.map((card) => (
            <CardPromo key={card.titulo} card={card} />
          ))}
        </Styled.Wrapper>
        <Styled.Link href="/">Ver mais</Styled.Link>
      </Styled.Container>
    </Styled.Section>
  );
};

export default PromoStyledection;
