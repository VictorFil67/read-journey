import { useDispatch, useSelector } from "react-redux";
import book from "../../images/myLibraryBooksImages/book.png";
import book2x from "../../images/myLibraryBooksImages/book@2x.png";
import bookMobile from "../../images/myLibraryBooksImages/bookMobile.png";
import bookMobile2x from "../../images/myLibraryBooksImages/bookMobile@2x.png";
import {
  selectOption,
  selectPath,
  selectPrevPath,
  selectPrevUserBooks,
  selectUserBooks,
  selectfilteredUserBooks,
} from "../../store/books/selectors";
import MyBooksFilter from "../MyBooksFilter/MyBooksFilter";
import {
  ContentWrap,
  MyBookList,
  MyLibraryWrap,
  Picture,
  Span,
  Text,
  Title,
  TopWrap,
} from "./MyLibraryBooks.Styled";
import { LibraryItem } from "../LibraryItem/LibraryItem";
import { useEffect, useState } from "react";
import { getfilteredUserBooks, setOption } from "../../store/books/booksSlise";

export const MyLibraryBooks = ({ modalRead, setModalRead }) => {
  const userBooks = useSelector(selectUserBooks);
  const prevUserBooks = useSelector(selectPrevUserBooks);
  const prevPath = useSelector(selectPrevPath);
  const path = useSelector(selectPath);
  const filteredUserBooks = useSelector(selectfilteredUserBooks);
  const option = useSelector(selectOption);
  const [selectedOption, setSelectedOption] = useState(option);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOption(selectedOption));

    if (
      selectedOption ||
      // prevUserBooks?.length !== userBooks?.length ||
      (prevPath && prevPath !== path)
    ) {
      dispatch(getfilteredUserBooks(selectedOption.value));
    }
  }, [dispatch, selectedOption, prevUserBooks, userBooks, prevPath, path]);

  return (
    <MyLibraryWrap $length={userBooks?.length}>
      <TopWrap>
        <Title>My library</Title>
        <MyBooksFilter
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </TopWrap>
      {userBooks?.length === 0 ? (
        <ContentWrap>
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={bookMobile + " 1x, " + bookMobile2x + " 2x"}
            />
            <source srcSet={book + " 1x, " + book2x + " 2x"} />
            <Picture src={book} alt="book" loading="lazy" />
          </picture>
          <Text>
            To start training, add <Span>some of your books</Span> or from the
            recommended ones
          </Text>
        </ContentWrap>
      ) : (
        <MyBookList>
          {!selectedOption
            ? userBooks.map((book) => (
                <LibraryItem
                  key={book._id}
                  book={book}
                  modalRead={modalRead}
                  setModalRead={setModalRead}
                />
              ))
            : filteredUserBooks.map((book) => (
                <LibraryItem
                  key={book._id}
                  book={book}
                  modalRead={modalRead}
                  setModalRead={setModalRead}
                />
              ))}
        </MyBookList>
      )}
    </MyLibraryWrap>
  );
};

// export const MyLibraryBooks = ({ modalRead, setModalRead }) => {
//   const userBooks = useSelector(selectUserBooks);
//   const filteredUserBooks = useSelector(selectfilteredUserBooks);
//   const option = useSelector(selectOption);
//   const [selectedOption, setSelectedOption] = useState(option);
//   const dispatch = useDispatch();
//   console.log(selectedOption);

//   useEffect(() => {
//     dispatch(setOption(selectedOption));
//     console.log(selectedOption);
//     if (selectedOption) {
//       dispatch(getfilteredUserBooks(selectedOption.value));
//       console.log(selectedOption.value);
//     }
//   }, [dispatch, selectedOption]);

//   return (
//     <MyLibraryWrap $length={userBooks?.length}>
//       <TopWrap>
//         <Title>My library</Title>
//         <MyBooksFilter
//           selectedOption={selectedOption}
//           setSelectedOption={setSelectedOption}
//         />
//       </TopWrap>
//       {userBooks?.length === 0 ? (
//         <ContentWrap>
//           <picture>
//             <source
//               media="(max-width:767px)"
//               srcSet={bookMobile + " 1x, " + bookMobile2x + " 2x"}
//             />
//             <source srcSet={book + " 1x, " + book2x + " 2x"} />
//             <Picture src={book} alt="book" loading="lazy" />
//           </picture>
//           <Text>
//             To start training, add <Span>some of your books</Span> or from the
//             recommended ones
//           </Text>
//         </ContentWrap>
//       ) : (
//         <MyBookList>
//           {!selectedOption
//             ? userBooks.map((book) => (
//                 <LibraryItem key={book._id} book={book} />
//               ))
//             : filteredUserBooks.map((book) => (
//                 <LibraryItem key={book._id} book={book} />
//               ))}
//         </MyBookList>
//       )}
//     </MyLibraryWrap>
//   );
// };
