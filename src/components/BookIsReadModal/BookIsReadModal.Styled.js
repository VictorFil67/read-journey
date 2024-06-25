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
  padding-top: 300px;
  background: rgba(20, 20, 20, 0.6);
  z-index: 3;
  overflow: auto;
  @media only screen and (min-width: 768px) {
    padding-top: 350px;
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 272px;
  }
`;
export const Picture = styled.img`
  display: block;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    height: 68px;
  }
`;
