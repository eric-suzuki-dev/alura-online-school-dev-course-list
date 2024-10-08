import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin: 0 60px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #000000;
  margin-bottom: 32px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Card = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 16px;
  background-color: #fef7ff;
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Testimonial = styled.p`
  font-size: 16px;
  color: #49454f;
  font-style: normal;
`;

export const Autor = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #1d1b20;
`;
