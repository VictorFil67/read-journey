// import styled, { keyframes } from "styled-components";

import styled from "styled-components";

export const NotStartedComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  align-items: center;

  & > div {
    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #f9f9f9;
      padding-bottom: 14px;
    }

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 129%;
      letter-spacing: -0.02em;
      color: #686868;
    }
  }
`;

export const StatisticsWrap = styled.div`
  @media only screen and (min-width: 768px) {
    width: 321px;
  }
  @media only screen and (min-width: 1280px) {
    width: 313px;
  }
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  @media only screen and (min-width: 768px) {
    padding-right: 16px;
    padding-bottom: 16px;
  }
  @media only screen and (min-width: 1280px) {
    padding-right: 0;
    padding-bottom: 20px;
  }
  & > :first-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #f9f9f9;
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  & > :nth-child(2) {
    display: flex;
    gap: 8px;
  }
`;
// const hoverAnimation = keyframes`
//     0% {
//       transform: scale(1);
//     }
//     100% {
//       transform: scale(1.1);
//     }
//   `;
export const ReadingStatisticsButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border: none;
  /* transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  } */
`;
export const StatisticsText = styled.p`
  display: none;
  @media only screen and (min-width: 1280px) {
    max-width: 293px;
    display: block;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    letter-spacing: -0.02em;
    color: var(--input-title);
    padding-bottom: 20px;
  }
`;
export const DataWrap = styled.div`
  width: 100%;
  border-radius: 12px;
  background: #262626;
  display: flex;
  justify-content: center;
`;

export const StarWraper = styled.div`
  border-radius: 100%;
  display: flex;
  background-color: #262626;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
`;
