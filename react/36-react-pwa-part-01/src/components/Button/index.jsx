import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 24px;
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
