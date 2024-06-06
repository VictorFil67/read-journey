import styled from "styled-components";
import { ContentWraper, FiltersFormWraper } from "../Filters/Filters.Styled";

export const ContentWrap = styled(ContentWraper)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const FiltersTitle = styled.h3`
  padding-left: 13px;
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;
export const FiltersFormWrap = styled(FiltersFormWraper)``;
// export const Rrrr = styled.div``;

export const InputWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 472px;
  @media only screen and (min-width: 768px) {
    /* gap: 14px; */
  }
`;
export const InputContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  @media only screen and (min-width: 768px) {
  }
`;
export const Label = styled.label`
  display: flex;
  gap: 10px;
  border-radius: 12px;
  align-items: center;
  background: var(--input-bg);
  @media only screen and (min-width: 768px) {
  }
`;
export const InputTitle = styled.p`
  padding: 14px 0 14px 14px;
  border-radius: 12px 0 0 12px;
  color: var(--input-title);
  background: var(--input-bg);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  text-align: center;
  @media only screen and (min-width: 768px) {
    padding: 16px 0 16px 14px;
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const Input = styled.input`
  padding: 14px 14px 14px 0;
  border-radius: 0 12px 12px 0;
  background: var(--input-bg);
  color: var(--white);
  /* width: 100%; */
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  &::placeholder {
    background: var(--input-bg);
    color: var(--white);
  }
  &:active {
    background: var(--input-bg);
    color: var(--white);
  }
  @media only screen and (min-width: 768px) {
    padding: 16px 16px 16px 0;
    font-size: 14px;
    line-height: 1.28571;
  }
`;
