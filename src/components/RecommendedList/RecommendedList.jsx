import { useDispatch, useSelector } from "react-redux";
import {
  // selectPage,
  selectRecommendedBooks,
  selectRequestData,
  selectTotalPages,
} from "../../store/books/selectors";
import { changePage } from "../../store/books/booksSlise";
import { recommendedBooksThunk } from "../../store/books/operations";
import { RecommendedItem } from "../RecommendedItem/RecommendedItem";
import { MyBookList } from "../MyLibraryBooks/MyLibraryBooks.Styled";

const RecommendedList = () => {
  const booksList = useSelector(selectRecommendedBooks);
  const dispatch = useDispatch();
  const { title, author, page, limit } = useSelector(selectRequestData);
  const totalPages = useSelector(selectTotalPages);
  console.log(booksList);

  function getPage(num) {
    dispatch(changePage(num));
    dispatch(recommendedBooksThunk({ title, author, page, limit }));
  }

  return (
    <>
      <div>
        <h1>Recommended</h1>
        <div>
          <button
            onClick={() => getPage(-1)}
            disabled={page === 1 ? true : false}
          >
            Попередня
          </button>
          {/* {console.log(first)} */}
          <button
            onClick={() => getPage(1)}
            disabled={page === totalPages ? true : false}
          >
            Наступна
          </button>
        </div>
        <div>
          <MyBookList>
            {booksList.map((book) => (
              <RecommendedItem key={book._id} book={book} />
            ))}
          </MyBookList>
        </div>
      </div>
    </>
  );
};

export default RecommendedList;
