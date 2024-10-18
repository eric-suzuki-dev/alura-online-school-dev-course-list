import styled from "styled-components";

export const Container = styled.section`
  position: relative;
`;

export const Title1 = styled.h1`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  position: absolute;
  color: #ffffff;
  width: 235px;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -15%);
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 32px;
    width: 353px;
  }

  @media (min-width: 1024px) {
    width: 488px;
    font-size: 42px;
    top: 40%;
    left: 33%;
    transform: translate(-50%, -15%);
  }
`;

export const Banner = styled.picture`
  display: block;

  & > img {
    width: 100%;
  }
`;
