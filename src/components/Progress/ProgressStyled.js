import styled from "styled-components";

export const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media only screen and (min-width: 768px) {
    width: 305px;
    gap: 50px;
  }
  @media only screen and (min-width: 1280px) {
    gap: 60px;
  }
  /* & > div {
    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #f9f9f9;
      padding: 20px 0 14px;
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 129%;
      letter-spacing: -0.02em;
      color: #686868;
    }
  } */
`;

export const Title = styled.h2`
  font-weight: 700;
  line-height: 1;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--white);
  /* padding-top: 20px; */
  padding-bottom: 14px;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--input-title);
  @media only screen and (min-width: 768px) {
  }
`;
export const StarWraper = styled.div`
  border-radius: 100%;
  display: flex;
  background-color: #262626;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 52px;
    width: 100px;
    height: 100px;
  }
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;
