import styled from "styled-components";

export const ProgressWraper = styled.div`
  background: #262626;
  padding: 16px;
  border-radius: 12px;
  height: 211px;
  width: 100%;
  position: relative;
  overflow-y: auto;
  scroll-padding-left: 2px;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 15px;
    background-color: #1f1f1f;
  }

  &::-webkit-scrollbar-track:hover {
    background-color: #1f1f1f;
  }

  &::-webkit-scrollbar-track:active {
    background-color: #1f1f1f;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #262626;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #262626;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #262626;
  }
  @media only screen and (min-width: 768px) {
    height: 252px;
  }
  @media only screen and (min-width: 1280px) {
    height: 373px;
  }
`;
export const DiaryComponentUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;
  & > :not(:first-child) > div > div > div > span:first-child {
    color: var(--input-title);
  }
  & > :not(:first-child) > div > div > div:first-child {
    opacity: 0.3;
  }

  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;
export const DateLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;

  /* justify-content: space-between; */
`;
export const TopWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const DateLeftWrap = styled.div`
  display: flex;
  gap: 9px;
`;
export const DateWrap = styled.div`
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
export const BlackWhiteSquareWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background: #1f1f1f;
    top: 100%;
    left: 45%;

    height: ${(props) => props.ulHeight && "292px"};
  }
`;
export const DateRightWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media only screen and (min-width: 768px) {
    gap: 18px;
  }
`;
export const PagesSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: -0.02em;
  text-align: start;
  color: #686868;
  padding-right: 22px;
`;
export const DateUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 17px;
  @media only screen and (min-width: 768px) {
    gap: 14px;
  }
`;
