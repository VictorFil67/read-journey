import { useNavigate } from "react-router-dom";
import CloseSVG from "../../images/CloseSVG";
import {
  CoverText,
  LibraryItemImg,
  Span,
} from "../LibraryItem/LibraryItem.Styled";
import {
  Author,
  CloseButton,
  ContentWrap,
  Cover,
  Modal,
  Overlay,
  Pages,
  //   Picture,
  //   Span,
  StartReadingtButton,
  //   Text,
  TextWrap,
  Title,
} from "./StartReadingModal.Styled";
import { useDispatch } from "react-redux";
import { setBookId } from "../../store/books/booksSlise";

export const StartReadingModal = ({ handleCloseClick, book }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      handleCloseClick();
    }
  }
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      handleCloseClick();
      document.removeEventListener("keydown", onWindowEscape);
    }
  }
  function handleStartReading(id) {
    dispatch(setBookId(id));
    navigate(`/reading`);
  }

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={handleCloseClick}>
          <CloseSVG />
        </CloseButton>
        <ContentWrap>
          <Cover $image={book.imageUrl}>
            {book.imageUrl ? (
              <LibraryItemImg src={book.imageUrl} alt={book.title} />
            ) : (
              <CoverText>
                There is no cover for <br /> <Span>{book.title}</Span>
              </CoverText>
            )}
          </Cover>
          <TextWrap>
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
            <Pages>{book.totalPages}</Pages>
          </TextWrap>
        </ContentWrap>
        <StartReadingtButton
          aria-label="Start reading"
          onClick={() => handleStartReading(book._id)}
        >
          Start reading
        </StartReadingtButton>
      </Modal>
    </Overlay>
  );
};
