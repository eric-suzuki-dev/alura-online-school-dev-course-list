import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 23px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #6750a4;
`;

export const Description = styled.p`
  font-size: 22px;
  font-weight: 400;
  text-align: center;
`;

export const Link = styled(RouterLink)`
  font-size: 16px;
  font-weight: 500;
  color: #6750a4;
  text-decoration: none;
  align-self: flex-start;
`;
