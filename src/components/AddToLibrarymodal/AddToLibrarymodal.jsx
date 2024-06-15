// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CloseSVG from "../../images/CloseSVG";
import {
  addBookFromRecommend,
  getUserBooks,
} from "../../store/books/operations";
import {
  CoverText,
  LibraryItemImg,
  Span,
} from "../LibraryItem/LibraryItem.Styled";
import {
  Author,
  CloseButton,
  //   ContentWrap,
  Cover,
  //   Modal,
  Overlay,
  Pages,
  TextWrap,
} from "../StartReadingModal/StartReadingModal.Styled";
import {
  AddToLibraryBtn,
  ContentWrap,
  Modal,
  Title,
} from "./AddToLibrarymodal.Styled";
import { toast } from "react-toastify";
// import { CloseButton } from "../StartReadingModal/StartReadingModal.Styled";

export const AddBookModal = ({ setModal, book }) => {
  const dispatch = useDispatch();

  function handleClick(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }
  document.addEventListener("keydown", onWindowEscape);
  function onWindowEscape(e) {
    if (e.code === "Escape") {
      setModal(false);
      document.removeEventListener("keydown", onWindowEscape);
    }
  }
  function addBookClick(id) {
    dispatch(addBookFromRecommend(id))
      .unwrap()
      .then(() => {
        toast.success("Congratulations! The book is added successfully!");
        dispatch(getUserBooks());
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <CloseButton onClick={() => setModal(false)}>
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
        <AddToLibraryBtn
          aria-label="Add to library"
          onClick={() => addBookClick(book._id)}
        >
          {console.log(book._id)}
          Add to library
        </AddToLibraryBtn>
      </Modal>
    </Overlay>
  );
};
