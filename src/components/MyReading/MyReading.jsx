import { useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import {
  Author,
  Book,
  BookImg,
  BookTitle,
  Cover,
  CoverText,
  Description,
  LeftTime,
  MyReadingWrap,
  Span,
  TextWrap,
  TopWrap,
} from "./MyReading.Styled";
import { Title } from "../MyLibraryBooks/MyLibraryBooks.Styled";
import PauseIndicatorSVG from "../../images/PauseIndicatorSVG";
import ReadingIndicatorSVG from "../../images/ReadingIndicatorSVG";

export const MyReading = ({ indicator, activeSection, start }) => {
  const bookInfo = useSelector(selectBookInfo);
  return (
    <MyReadingWrap>
      <TopWrap>
        <Title>My reading</Title>
        <LeftTime>
          {activeSection === "Statistics" || !start
            ? `${bookInfo.timeLeftToRead?.hours} hours and 
          ${bookInfo.timeLeftToRead?.minutes} minutes left`
            : ""}
        </LeftTime>
      </TopWrap>
      <Book>
        <Cover $image={bookInfo.imageUrl}>
          {bookInfo.imageUrl ? (
            <BookImg src={bookInfo.imageUrl} alt={bookInfo.title} />
          ) : (
            <CoverText>
              There is no cover for <br /> <Span>{bookInfo.title}</Span>
            </CoverText>
          )}
        </Cover>
        <Description>
          <TextWrap>
            <BookTitle>{bookInfo.title}</BookTitle>
            <Author>{bookInfo.author}</Author>
          </TextWrap>
          {!indicator ? <PauseIndicatorSVG /> : <ReadingIndicatorSVG />}
        </Description>
      </Book>
    </MyReadingWrap>
  );
};
