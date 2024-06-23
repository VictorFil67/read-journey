import { useSelector } from "react-redux";
import { Progress } from "../Progress/Progress";
import { RecommendedBooks } from "../RecommendedBooks/RecommendedBooks";
import { Statistics } from "../Statistics/Statistics";
import { Workout } from "../Workout/Workout";
import {
  BooksDeskWrap,
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
  Span,
  SubmitButton,
  Text,
} from "./Dashboard.Styled";
import { selectPath } from "../../store/books/selectors";
import booksDesk from "../../images/booksDesk.png";

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
  activeSection,
  setActiveSection,
  setStart,
}) => {
  const path = useSelector(selectPath);
  console.log(path);
  function chooseSecondPart(string) {
    switch (string) {
      case "Start your workout":
        return <Workout />;
      case "Recommended books":
        return <RecommendedBooks />;
      case "Progress":
        return <Progress setStart={setStart} />;
      case "Workout info":
        return (
          <Statistics
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        );
      // case "statistics":
      //   return <></>;

      default:
        "Start your workout";
        break;
    }
  }

  return (
    <>
      <ContentWrap $path={path} $stat={secondPart}>
        <Form $path={path} onSubmit={handleSubmit(onSubmit)}>
          <FiltersFormWrap>
            <FiltersTitle $path={path}>{title}</FiltersTitle>
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
          {/* {path === "/reading" <EmtyBlock/>} */}
        </Form>
        <div>{chooseSecondPart(secondPart)}</div>
        {window.innerWidth >= 1280 && (
          <BooksDeskWrap>
            <img src={booksDesk} alt="Books" />
            <Text>
              &ldquo;Books are <Span>windows</Span> to the world, and reading is
              a journey into the unknown.&rdquo;
            </Text>
          </BooksDeskWrap>
        )}
      </ContentWrap>
    </>
  );
};
