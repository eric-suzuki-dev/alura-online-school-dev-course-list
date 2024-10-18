import styled from "styled-components";

export const Container = styled.header`
  padding: 20px 24px;
  height: 72px;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 20px 60px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoMobile = styled.img`
  width: 42px;
  height: 40px;
`;
