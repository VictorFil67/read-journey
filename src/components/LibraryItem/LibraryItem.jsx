import { useDispatch, useSelector } from "react-redux";
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
import {
  deleteUserBook,
  getUserBooksThunk,
} from "../../store/books/operations";
import TrashCanSVG from "../../images/myLibraryBooksImages/TrashCanSVG";
import { createPortal } from "react-dom";
import { StartReadingModal } from "../StartReadingModal/StartReadingModal";
import { useState } from "react";
import { cutString } from "../../helpers/cutString";
import {} from "../../store/books/selectors";
import { selectExpireTime } from "../../store/auth/selectors";
import { currentThunk, refreshTokensThunk } from "../../store/auth/operations";
import { toast } from "react-toastify";

export const LibraryItem = ({ book, setModalRead }) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const expireTime = useSelector(selectExpireTime);

  // useEffect(() => {
  //   if (modalPage) {
  //     return;
  //   }
  //   if (modal) {
  //     // setModalPage(true);
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [modal, modalPage, setModalPage]);

  function deleteBook(id) {
    if (expireTime < Date.now()) {
      dispatch(refreshTokensThunk())
        .unwrap()
        .then(() => {
          dispatch(currentThunk()).catch((error) => toast.error(error));
        })
        .then(() => {
          dispatch(deleteUserBook(id));
          dispatch(getUserBooksThunk());
        })
        .catch((error) => toast.error(error));
    } else {
      dispatch(deleteUserBook(id));
      dispatch(getUserBooksThunk());
    }
  }
  function handleClick() {
    setModal(true);
    setModalRead(true);
  }
  function handleCloseClick() {
    setModal(false);
    setModalRead(false);
  }

  return (
    <>
      <BookItem>
        <Cover $image={book.imageUrl} onClick={handleClick}>
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
            <Title>{cutString(book.title, 15)}</Title>
            <Author>{cutString(book.author, 20)}</Author>
          </TextWrap>
          <DeleteButton onClick={() => deleteBook(book._id)}>
            <TrashCanSVG />
          </DeleteButton>
        </Description>
      </BookItem>
      {modal &&
        createPortal(
          <StartReadingModal book={book} handleCloseClick={handleCloseClick} />,
          document.body
        )}
    </>
  );
};
