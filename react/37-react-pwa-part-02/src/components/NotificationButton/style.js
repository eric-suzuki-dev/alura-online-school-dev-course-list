import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #6750a4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  transition: width 0.3s;
  width: ${({ $expanded }) => ($expanded ? "250px" : "40px")};
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  &:hover {
    width: 250px;
  }
`;

export const Message = styled.span`
  margin-left: 10px;
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const Interrogation = styled.p`
  display: block;
  font-size: 20px;
`;