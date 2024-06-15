// import { useDispatch } from "react-redux";
import {
  Author,
  BookItem,
  Cover,
  CoverText,
  // DeleteButton,
  Description,
  LibraryItemImg,
  Span,
  TextWrap,
  Title,
} from "../LibraryItem/LibraryItem.Styled";
// import { deleteUserBook } from "../../store/books/operations";
// import TrashCanSVG from "../../images/myLibraryBooksImages/TrashCanSVG";
import { createPortal } from "react-dom";
// import { StartReadingModal } from "../StartReadingModal/StartReadingModal";
import { useState } from "react";
import { cutString } from "../../helpers/cutString";
import { AddBookModal } from "../AddToLibrarymodal/AddToLibrarymodal";

export const RecommendedItem = ({ book }) => {
  // const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

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
            <Title>{cutString(book.title, 22)}</Title>
            <Author>{cutString(book.author, 25)}</Author>
          </TextWrap>
          {/* <DeleteButton onClick={() => dispatch(deleteUserBook(book._id))}> */}
          {/* <TrashCanSVG />
          </DeleteButton> */}
        </Description>
      </BookItem>
      {modal &&
        createPortal(
          <AddBookModal book={book} setModal={setModal} />,
          document.body
        )}
    </>
  );
};
