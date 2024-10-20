import React, { useState } from "react";
import * as Styled from "./style";

const NotificationButton = ({ action }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Styled.ButtonWrapper>
      <Styled.Button
        onClick={action}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        $expanded={expanded ? "true" : undefined}
      >
        {expanded ? (
          <Styled.Message $expanded={expanded}>
            Receber Notificação
          </Styled.Message>
        ) : (
          <Styled.Interrogation>?</Styled.Interrogation>
        )}
      </Styled.Button>
    </Styled.ButtonWrapper>
  );
};

export default NotificationButton;