import styled from "styled-components";

export const RecommendedWrap = styled.div`
  border-radius: 30px;
  background: #1f1f1f;
  padding: 40px 20px;
  @media (min-width: 768px) {
    padding: 40px 40px;
  }
  @media (min-width: 1280px) {
    padding: 40px 42px 28px 40px;
  }
  & > :first-child {
    display: flex;
    justify-content: space-between;
    padding-bottom: 22px;
    @media (min-width: 768px) {
      padding-bottom: 20px;
    }

    & > :first-child {
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #f9f9f9;
    }
    & > :nth-child(2) {
      display: flex;
      gap: 8px;
    }
  }
`;

export const ChangePageButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  margin: 0 auto;
  border: none;
  height: 32px;
  @media only screen and (min-width: 768px) {
    height: 40px;
  }
`;

export const RecommBooksListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 23px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    gap: 23px;
  }

  @media (min-width: 1280px) {
    justify-content: flex-start;
    gap: 20px;
  }

  li {
    min-width: 137px;
    display: flex;
    flex-direction: column;

    text-align: center;
    cursor: pointer;
    align-items: flex-start;
  }
`;
