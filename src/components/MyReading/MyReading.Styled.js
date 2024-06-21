import styled from "styled-components";

export const MyReadingWrap = styled.div`
  padding: 40px 20px;
  background-color: var(--dark-grey);
  border-radius: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;
export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const LeftTime = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: var(--input-title);
`;
export const Book = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 146px;
  align-items: center;
`;
export const Cover = styled.div`
  border-radius: 8px;
  width: 137px;
  height: 208px;
  cursor: pointer;
  border: ${(props) => (props.$image ? "none" : "1px solid #3e3e3e")};
`;
export const BookImg = styled.img`
  border-radius: 8px;
  height: 100%;
  /* display: ${(props) => (props.$image ? "blok" : "none")}; */
`;
export const CoverText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.28571;
  color: var(--input-title);
  padding: 15px;
`;
export const Span = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--white);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 137px;
  gap: 20px;
  align-items: center;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const BookTitle = styled.h3`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.28571;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: center;
`;
export const Author = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--input-title);
  text-align: center;
`;
