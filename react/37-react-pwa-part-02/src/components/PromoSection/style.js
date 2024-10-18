import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin: 0 60px;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  flex: 0 0 auto;
  font-size: 32px;
  font-style: normal;
  text-align: left;
  margin-bottom: 32px;
`;

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  gap: 24px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 32px;
  font-style: normal;
  color: #625b71;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
