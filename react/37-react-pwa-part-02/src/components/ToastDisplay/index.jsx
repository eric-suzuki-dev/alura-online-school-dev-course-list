/* eslint-disable react/prop-types */
import * as Styled from "./style";

const ToastDisplay = ({ notification }) => {
  return (
    <Styled.Container>
      <Styled.Title>{notification.title}</Styled.Title>
      <Styled.Body>{notification.body}</Styled.Body>
    </Styled.Container>
  );
};

export default ToastDisplay;