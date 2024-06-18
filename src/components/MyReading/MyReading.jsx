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
  MyReadingWrap,
  Span,
  TextWrap,
} from "./MyReading.Styled";
import { Title } from "../MyLibraryBooks/MyLibraryBooks.Styled";
import PauseIndicatorSVG from "../../images/PauseIndicatorSVG";
import ReadingIndicatorSVG from "../../images/ReadingIndicatorSVG";

export const MyReading = ({ indicator }) => {
  const bookInfo = useSelector(selectBookInfo);
  return (
    <MyReadingWrap>
      <Title>My reading</Title>
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
      {/* <>
        <div>
          <img src={bookInfo.imageUrl} alt={bookInfo.title} />
          <>
            <span>{bookInfo.title}</span>
            <span>{bookInfo.author}</span>
          </>
          <button>Start</button>
        </div>
      </> */}
    </MyReadingWrap>
  );
};
