import styled from "styled-components";
import Select from "react-select";

// export const FiltersWrapper = styled.div`
//   margin-top: 64px;
//   max-width: 224px;
// `;
// export const FilterLabel = styled.label`
//   font-size: 14px;
//   font-weight: 500;
//   color: #8a8a89;
// `;
export const FilterSelect = styled(Select)`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--white);
  /* margin-top: 8px; */
  border: none;
  outline: none;
  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.128571;
  }
`;
// export const FiltersWrapper = styled.div`

// `;
