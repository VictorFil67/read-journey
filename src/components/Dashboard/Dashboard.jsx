import { Progress } from "../Progress/Progress";
import { RecommendedBooks } from "../RecommendedBooks/RecommendedBooks";
import { Statistics } from "../Statistics/Statistics";
import { Workout } from "../Workout/Workout";
import {
  ContentWrap,
  ErrorSpan,
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

export const Dashboard = ({
  title,
  inputs,
  titleButton,
  secondPart,
  register,
  handleSubmit,
  onSubmit,
  errors,
  validation,
}) => {
  function chooseSecondPart(string) {
    switch (string) {
      case "Start your workout":
        return <Workout />;
      case "Recommended books":
        return <RecommendedBooks />;
      case "Progress":
        return <Progress />;
      case "Workout info":
        return <Statistics />;
      // case "statistics":
      //   return <></>;

      default:
        "Start your workout";
        break;
    }
  }
  return (
    <>
      <ContentWrap>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FiltersFormWrap>
            <FiltersTitle>{title}</FiltersTitle>
            <InputWrap>
              {inputs.map((el, idx) => (
                <InputContainer key={idx}>
                  <Label>
                    {el.label}
                    <InputTitle>{el.title}</InputTitle>
                    <Input
                      placeholder={el.placeholder}
                      type={el.type}
                      {...register(
                        el.name,
                        validation && {
                          required: {
                            value: true,
                            message: "The field must not be empty!",
                          },
                        }
                      )}
                    ></Input>
                  </Label>
                  {validation && (
                    <ErrorSpan>
                      {errors[register(el.name).name]?.message}
                    </ErrorSpan>
                  )}
                </InputContainer>
              ))}
            </InputWrap>
          </FiltersFormWrap>
          <SubmitButton name="submit" type="submit" aria-label={titleButton}>
            {titleButton}
          </SubmitButton>
        </Form>
        <div>{chooseSecondPart(secondPart)}</div>
      </ContentWrap>
    </>
  );
};
