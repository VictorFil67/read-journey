import styled from "styled-components";
import NextSVG from "../../images/NextSVG";
import { Link } from "react-router-dom";

export const RecommendedBooksWrap = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
  background: var(--input-bg);
  border-radius: 12px;
  /* align-items: flex-start; */
  padding: 20px;
`;
export const Title = styled.h1`
  font-weight: 700;
  line-height: 1;
  font-size: 18px;
  letter-spacing: -0.02em;
  /* text-align: center; */
  color: var(--white);
`;
export const LinksWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--input-title);
`;
export const ImgWrap = styled.div`
  margin: 14px 0 11px;
`;
export const LinkStyled = styled(Link)`
  align-self: flex-end;
  text-decoration: underline;
  text-underline-offset: 3px;
`;
export const LinkNextSVG = styled(Link)`
  width: 20px;
  height: 20px;
  display: flex;
  /* align-self: flex-start; */
`;
export const NextSVGStyled = styled(NextSVG)`
  width: 20px;
  height: 20px;
  align-self: flex-start;
`;
