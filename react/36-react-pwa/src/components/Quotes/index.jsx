/* eslint-disable react/prop-types */
import * as Styled from "./style";

const Quotes = ({quotes}) => {
  return (
    <Styled.Section>
      <Styled.Container>
        <Styled.Title>Depoimentos</Styled.Title>
        <Styled.List>
          {quotes.map((quote) => (
            <Styled.Card key={quote.autor}>
              <Styled.Image
                src={quote.imagem}
                alt="Imagem de um usuário da plataforma"
              />
              <Styled.Wrapper>
                <Styled.Testimonial>{quote.depoimento}</Styled.Testimonial>
                <Styled.Autor>{quote.autor}</Styled.Autor>
              </Styled.Wrapper>
            </Styled.Card>
          ))}
        </Styled.List>
      </Styled.Container>
    </Styled.Section>
  );
};

export default Quotes;
