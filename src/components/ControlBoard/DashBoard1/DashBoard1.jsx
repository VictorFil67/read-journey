// import { ContentWraper } from "../Filters/Filters.Styled";

import { ContentWraper } from "../../Filters/Filters.Styled";

// import { ContentWraper } from "../ControlBoard.Styled";

// import { ContentWraper } from "../AnotherStyles/AnotherStyles.Styled";

// import { ContentWraper } from "../ControlBoard/ControlBoard.Styled";

export const Dashboard1 = () => {
  function chooseSecondPart(string) {
    switch (string) {
      case "statistics":
        return <></>;
      case "2":
        return <></>;
      case "3":
        return <></>;
      case "4":
        return <></>;
      case "5":
        return <></>;

      default:
        break;
    }
  }
  return (
    <>
      <ContentWraper />
      {/* <ContentWrap>
          <Form>
            <FiltersFormWrap>
              <FiltersTitle>{title}</FiltersTitle>
              <InputWrap>
                {inputs.map((el, idx) => (
                  <InputContainer key={idx}>
                    <Label>
                      {el.label}
                      <InputTitle>{el.title}</InputTitle>
                      <Input placeholder={el.placeholder} type="text"></Input>
                    </Label>
                  </InputContainer>
                ))}
              </InputWrap>
            </FiltersFormWrap>
            <button>{titleButton}</button>
          </Form>
          <div>{chooseSecondPart(secondPart)}</div>
        </ContentWrap> */}
    </>
  );
};
