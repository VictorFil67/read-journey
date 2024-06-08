// import { ContentWraper } from "../Filters/Filters.Styled";

// import styled from "styled-components";
import { RecommendedBooks } from "../RecommendedBooks/RecommendedBooks";
import {
  ContentWrap,
  FiltersFormWrap,
  FiltersTitle,
  Form,
  Input,
  InputContainer,
  InputTitle,
  InputWrap,
  Label,
  SubmitButton,
} from "./Dashboard.Styled";

// import { ContentWraper } from "../AnotherStyles/AnotherStyles.Styled";

// import { ContentWraper } from "../ControlBoard/ControlBoard.Styled";

export const Dashboard = ({ title, inputs, titleButton, secondPart }) => {
  function chooseSecondPart(string) {
    switch (string) {
      case "Start your workout":
        return <></>;
      case "Recommended books":
        return (
          <>
            <RecommendedBooks />
          </>
        );
      case "":
        return <></>;
      case "4":
        return <></>;
      case "statistics":
        return <></>;

      default:
        "Start your workout";
        break;
    }
  }
  return (
    <>
      <ContentWrap>
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
          <SubmitButton>{titleButton}</SubmitButton>
        </Form>
        <div>{chooseSecondPart(secondPart)}</div>
      </ContentWrap>
    </>
  );
};
