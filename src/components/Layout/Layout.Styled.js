import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  padding: 20px 20px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 40px;
  }
  @media only screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 64px;
  }
`;
