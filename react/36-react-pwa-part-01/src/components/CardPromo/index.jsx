/* eslint-disable react/prop-types */
import { Button } from "../Button";
import * as Styled from "./style";

const CardPromo = ({ card }) => {
  return (
    <Styled.Container>
      <Styled.Image src={card.imagem} alt={card.alt} />
      <Styled.Infos>
        <Styled.Title>{card.titulo}</Styled.Title>
        <div>
          <Styled.Paragraph>Data de ida: {card.data_ida}</Styled.Paragraph>
          <Styled.Paragraph>Data de volta: {card.data_volta}</Styled.Paragraph>
          <Styled.Paragraph>Origem: {card.origem}</Styled.Paragraph>
          <Styled.Paragraph>Destino: {card.destino}</Styled.Paragraph>
          <Styled.Paragraph>Tipo: {card.tipo}</Styled.Paragraph>
        </div>
        <Styled.Price>R$ {card.valor}</Styled.Price>
        <Button>Ver detalhes</Button>
      </Styled.Infos>
    </Styled.Container>
  );
};

export default CardPromo;
