import { useDispatch } from "react-redux";
import {
  Author,
  BookItem,
  Cover,
  CoverText,
  DeleteButton,
  Description,
  LibraryItemImg,
  Span,
  TextWrap,
  Title,
} from "./LibraryItem.Styled";
import { deleteUserBook } from "../../store/books/operations";
import TrashCanSVG from "../../images/myLibraryBooksImages/TrashCanSVG";
import { createPortal } from "react-dom";
import { StartReadingModal } from "../StartReadingModal/StartReadingModal";
import { useState } from "react";
import { cutString } from "../../helpers/cutString";
// import { deleteUserBook } from "../../store/books/operations";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

const LibraryItem = ({ book }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  // const navigate = useNavigate();

  // const handleDeleteBook = (id) => {
  //   dispatch(deleteUserBook(id))
  //     .unwrap()
  //     .then(() => {
  //       toast.success("Book deleted successfully!");
  //     })
  //     .catch((error) => {
  //       toast.error("Error deleting book: " + error.message);
  //     });
  // };

  // const handleFetchBookInfo = (id) => {
  //   navigate(`/reading/${id}`);
  // };

  return (
    <>
      <BookItem>
        <Cover $image={book.imageUrl} onClick={setModal}>
          {book.imageUrl ? (
            <LibraryItemImg src={book.imageUrl} alt={book.title} />
          ) : (
            <CoverText>
              There is no cover for <br /> <Span>{book.title}</Span>
            </CoverText>
          )}
        </Cover>
        <Description>
          <TextWrap>
            <Title>{cutString(book.title, 16)}</Title>
            <Author>{cutString(book.author, 20)}</Author>
          </TextWrap>
          <DeleteButton onClick={() => dispatch(deleteUserBook(book._id))}>
            <TrashCanSVG />
          </DeleteButton>
          {/* <button
            onClick={setModal}
            // onClick={() => handleFetchBookInfo(book._id)}
            // onClick={() => dispatch(getBookInfo(book._id))}
          >
            {console.log(getBookInfo)}
            Go to the selected book
          </button> */}
        </Description>
      </BookItem>
      {modal &&
        createPortal(
          <StartReadingModal book={book} setModal={setModal} />,
          document.body
        )}
    </>
  );
};

export default LibraryItem;
