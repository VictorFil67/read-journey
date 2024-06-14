import { useDispatch, useSelector } from "react-redux";
import {
  // selectPage,
  selectRecommendedBooks,
  selectRequestData,
  selectTotalPages,
} from "../../store/books/selectors";
import { changePage } from "../../store/books/booksSlise";
import { recommendedBooksThunk } from "../../store/books/operations";

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
          <ul>
            {booksList.map((book) => (
              <li key={book._id}>
                <img src={book.imageUrl} alt={book.title} />
                <div>
                  <span>{book.title}</span>
                  <span>{book.author}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecommendedList;
