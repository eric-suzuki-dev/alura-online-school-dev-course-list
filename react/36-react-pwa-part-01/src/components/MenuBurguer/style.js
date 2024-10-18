import styled from "styled-components";

export const Menu = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  z-index: 100;

  & > img {
    width: 30px;
    height: 22px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 230px;
  height: 312px;
  background-color: #ffffff;
  padding: 24px;
  position: absolute;
  top: 72px;
  right: 0;
  z-index: 2;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #79747e;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
`;

export const Divisor = styled.div`
  width: 182px;
  height: 1px;
  background-color: #79747e;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const Overflow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
