import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 23px;
  margin: 0 auto;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 60px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const Heading1 = styled.h1`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #6750a4;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;

  @media (min-width: 1024px) {
    align-self: flex-start;
  }
`;

export const Link = styled(RouterLink)`
  font-size: 16px;
  font-weight: 500;
  color: #6750a4;
  text-decoration: none;
  align-self: flex-start;

  @media (min-width: 768px) {
    align-self: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 242px;
  border-radius: 16px;
  background-color: #f7f2fa;
  width: 100%;
  padding: 16px;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 24px;

    & > div:first-child {
      display: flex;
      gap: 24px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 32px;

    & > div:first-child {
      width: 60%;
    }

    & > div:last-child {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
`;

export const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: #6750a4;
`;

export const Divisor = styled.div`
  height: 1px;
  width: 100%;
  background-color: #6750a4;

  @media (min-width: 1024px) {
    height: 250px;
    width: 1px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;

  @media (min-width: 768px) {
    width: 310px;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
