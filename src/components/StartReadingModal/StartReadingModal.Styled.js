import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 250px;
  background: rgba(20, 20, 20, 0.6);
  z-index: 3;
  overflow: auto;
  @media only screen and (min-width: 768px) {
    padding-top: 270px;
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 182px;
  }
`;
export const Modal = styled.div`
  position: relative;
  border: 1px solid rgba(104, 104, 104, 0.2);
  padding: 40px 70px;
  background-color: var(--dark-grey);
  border-radius: 12px;
  max-width: 335px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media only screen and (min-width: 768px) {
    max-width: 500px;
    max-height: 483px;
    width: 500px;
    padding: 50px 70px;
    gap: 32px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  padding: 0;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  max-width: 100%;
`;
export const Cover = styled.div`
  border-radius: 8px;
  width: 140px;
  height: 213px;
  border: ${(props) => (props.$image ? "none" : "1px solid #3e3e3e")};
  @media only screen and (min-width: 768px) {
    width: 153px;
    height: 233px;
  }
`;
export const LibraryItemImg = styled.img`
  display: ${(props) => (props.$image ? "blok" : "none")};
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white);
  text-align: center;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Author = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: var(--input-title);
  margin-top: 2px;
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28571;
  }
`;
export const Pages = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--white);
`;
export const StartReadingtButton = styled.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 11px 24px;
  background: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.02em;
  color: var(--white);
  @media only screen and (min-width: 768px) {
    width: 159px;
    height: 46px;
  }
`;
