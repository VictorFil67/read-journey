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
import PrevPageSVG from "../../images/PrevPageSVG";
import NextPageSVG from "../../images/NextPageSVG";
import { ChangePageButton, RecommendedWrap } from "./RecommendedList.Styled";

const RecommendedList = () => {
  const booksList = useSelector(selectRecommendedBooks);
  const dispatch = useDispatch();
  const { title, author, page, limit } = useSelector(selectRequestData);
  const totalPages = useSelector(selectTotalPages);
  console.log(booksList);

  function getPage(num) {
    dispatch(changePage(num));
    dispatch(recommendedBooksThunk({ title, author, page: page + num, limit }));
  }

  return (
    <>
      <RecommendedWrap>
        <div>
          <h1>Recommended</h1>
          <div>
            <ChangePageButton
              onClick={() => getPage(-1)}
              disabled={page === 1 ? true : false}
            >
              <PrevPageSVG disabled={page === 1 ? true : false} />
            </ChangePageButton>
            {/* {console.log(first)} */}
            <ChangePageButton
              onClick={() => getPage(1)}
              disabled={page === totalPages ? true : false}
            >
              <NextPageSVG disabled={page === totalPages ? true : false} />
            </ChangePageButton>
          </div>
        </div>
        <div>
          <MyBookList>
            {booksList.map((book) => (
              <RecommendedItem key={book._id} book={book} />
            ))}
          </MyBookList>
        </div>
      </RecommendedWrap>
    </>
  );
};

export default RecommendedList;
