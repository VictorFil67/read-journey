import {
  Author,
  BookItem,
  Cover,
  CoverText,
  Description,
  LibraryItemImg,
  Span,
  TextWrap,
  Title,
} from "../LibraryItem/LibraryItem.Styled";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { cutString } from "../../helpers/cutString";
import { AddBookModal } from "../AddToLibrarymodal/AddToLibrarymodal";

export const RecommendedItem = ({ book }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

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
            <Title>{cutString(book.title, 19)}</Title>
            <Author>{cutString(book.author, 25)}</Author>
          </TextWrap>
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
