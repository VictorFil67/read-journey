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
import { useEffect, useState } from "react";

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
  totalPages,
}) => {
  const path = useSelector(selectPath);
  const [desktop, setDesktop] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    function handleSize() {
      setDesktop(window.innerWidth >= 1280);
    }
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

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
                          max: {
                            value: totalPages,
                            message: `Max value can't be more ${totalPages}`,
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
        {desktop && (
          <BooksDeskWrap $path={path}>
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
