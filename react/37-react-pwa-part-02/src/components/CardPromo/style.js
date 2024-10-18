import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 242px;
  border: 1px solid #cac4d0;
  border-radius: 8px;
  background-color: #f7f2fa;

  @media (min-width: 768px) {
    width: 312px;
  }
`;

export const Image = styled.img`
  width: 240px;
  height: 260px;
  border-radius: 8px 8px 0 0;

  @media (min-width: 768px) {
    width: 310px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px 16px 16px;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 28px;
  text-align: left;
  color: #6750a4;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #49454f;
  text-align: left;
`;

export const Price = styled.p`
  font-size: 32px;
  font-weight: 500;
  color: #49454f;
  text-align: center;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 10px 24px;
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.$variant === "secundario" ? "transparent" : "#6750a4"};
  border-radius: 50px;
  border: ${(props) =>
    props.$variant === "secundario" ? "1px solid #79747E" : "none"};
  color: ${(props) =>
    props.$variant === "secundario" ? "#6750a4" : "#ffffff"};
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d0bcff;
  }
`;
