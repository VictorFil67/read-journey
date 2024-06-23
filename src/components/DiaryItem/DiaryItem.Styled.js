import styled from "styled-components";

export const DiaryDateWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > :first-child {
    font-weight: 700;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 0.02em;
    color: var(--white);
    height: 16px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.125;
    }
  }
`;
export const DiaryDateLi = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const DiaryDatePercentageWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :first-child {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--white);
    @media only screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1;
    }
  }

  & > :last-child {
    font-weight: 500;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--input-title);
    @media only screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 1.16667;
    }
  }
`;

export const DiaryDateLeftWraper = styled.div`
  display: flex;
  gap: 9px;
`;
export const DiaryDateRightWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (min-width: 768px) {
    gap: 18px;
  }
`;
export const DeleteRecordButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  margin: 0 auto;
  border: none;
  background-color: transparent;
`;
export const DeleteRecordWraper = styled.div`
  display: flex;
  gap: 5px;
`;

export const DeleteRecordPageHourDiv = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #686868;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ReadingSpeed = styled.span`
  display: block;
`;

export const PerHour = styled.span`
  display: block;
`;

export const DeleteRecordPagesSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: start;
  color: #686868;
`;

export const DeleteRecordVectorWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const BlackWhiteSquareWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ${DiaryDateLi}:not(:last-child) &::after {
    content: "";
    position: absolute;
    width: 2px;
    background: #1f1f1f;
    top: 20%;
    left: 50%;

    height: 100%;
  }
`;
