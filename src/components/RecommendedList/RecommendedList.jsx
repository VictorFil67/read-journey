import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectRecommendedBooks,
  selectTotalPages,
} from "../../store/books/selectors";
import { changePage } from "../../store/books/booksSlise";

const RecommendedList = () => {
  const booksList = useSelector(selectRecommendedBooks);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  console.log(booksList);
  return (
    <>
      <div>
        <h1>Recommended</h1>
        <div>
          <button
            onClick={() => dispatch(changePage(-1))}
            disabled={page === 1 ? true : false}
          >
            Попередня
          </button>
          <button
            onClick={() => dispatch(changePage(1))}
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
