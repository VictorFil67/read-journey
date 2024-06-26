import styled from "styled-components";
import { LinksWrap } from "../RecommendedBooks/RecommendedBooks.Styled";

export const WorkoutWrap = styled.div`
  background: var(--input-bg);
  border-radius: 12px;
  padding: 20px 20px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media only screen and (min-width: 768px) {
    width: 313px;
    padding: 20px;
  }
`;
export const Title = styled.h2`
  font-weight: 700;
  line-height: 1;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: var(--white);
  @media only screen and (min-width: 768px) {
    padding-bottom: 20px;
    font-size: 20px;
  }
`;
export const WorkoutNamredWraper = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: -0.02em;
  text-align: center;
  color: #1f1f1f;
  background: #fff;
  min-width: 40px;
  height: 40px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WorkoutItemContainer = styled.div`
  display: flex;
  gap: 12px;
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (min-width: 768px) {
    padding: 0;
    width: 253px;
  }
`;
export const WorkoutItemSpan = styled.span`
  display: inline;

  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const WorkoutItemP = styled.p`
  display: inline;
  color: #686868;
`;
export const LinksBlock = styled(LinksWrap)`
  padding-left: 10px;
  margin-top: -2px;
  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
