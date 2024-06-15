import styled from "styled-components";

export const Modal = styled.div`
  position: relative;
  border: 1px solid rgba(104, 104, 104, 0.2);
  padding: 40px 97px;
  background-color: var(--dark-grey);
  border-radius: 12px;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 100%;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: center;
  margin-bottom: 2px;
`;
export const AddToLibraryBtn = styled.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 12px 22px;
  background: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: var(--white);
`;
