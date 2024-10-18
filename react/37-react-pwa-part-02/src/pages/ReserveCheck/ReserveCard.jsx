/* eslint-disable react/prop-types */
import { Button } from "../../components/Button/index";
import * as Styled from "./styles";

const ReserveCard = ({ card }) => {
  return (
    <Styled.Card>
      <div>
        <Styled.Image src={card.imagem} alt={card.alt} />
        <Styled.Infos>
          <div>
            <Styled.Paragraph>Data de ida: {card.data_ida}</Styled.Paragraph>
            <Styled.Paragraph>
              Data de volta: {card.data_volta}
            </Styled.Paragraph>
            <Styled.Paragraph>Origem: {card.origem}</Styled.Paragraph>
            <Styled.Paragraph>Destino: {card.destino}</Styled.Paragraph>
            <Styled.Paragraph>Tipo: {card.tipo}</Styled.Paragraph>
          </div>
        </Styled.Infos>
      </div>
      <Styled.Divisor />
      <div>
        <Styled.Heading2>Valor final</Styled.Heading2>
        <Styled.Price>R$ {card.valor}</Styled.Price>
        <Button>Concluir reserva</Button>
      </div>
    </Styled.Card>
  );
};

export default ReserveCard;
