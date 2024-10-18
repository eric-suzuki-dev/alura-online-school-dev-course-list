import styled from "styled-components";

export const Banner = styled.picture`
  display: block;
  margin-bottom: -8px;

  & > img {
    width: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 32px 24px;

  @media (min-width: 768px) {
    padding: 32px 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    width: 1000px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  color: #ffffff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`;

export const Networks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: #ffff;
  font-size: 16px;

  & > div {
    display: flex;
    gap: 8px;
    & > img {
      width: 32px;
      height: 32px;
    }
  }
`;
