import { useForm } from "react-hook-form";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import RecommendedList from "../../components/RecommendedList/RecommendedList";
import { PageContainer } from "../MyLibraryPage/MyLibraryPage.Styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recommendedBooksThunk } from "../../store/books/operations";
import { selectRequestData } from "../../store/books/selectors";
import { setLimit, setRequestData } from "../../store/books/booksSlise";

const RecommendedPage = () => {
  const dispatch = useDispatch();
  const { limit } = useSelector(selectRequestData);
  const inputs = [
    {
      title: "Book title:",
      placeholder: "Enter text",
      name: "title",
      type: "text",
    },
    {
      title: "The author:",
      placeholder: "Enter text",
      name: "author",
      type: "text",
    },
  ];

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const getLimit = () => {
    if (window.innerWidth <= 767) return 2;
    if (window.innerWidth > 767 && window.innerWidth <= 1279) return 8;
    return 10;
  };

  useEffect(() => {
    let limit = getLimit();
    dispatch(setLimit(limit));
    dispatch(
      recommendedBooksThunk({
        limit,
      })
    );
  }, [dispatch]);

  const onSubmit = ({ title, author }) => {
    dispatch(setRequestData({ title, author }));
    dispatch(recommendedBooksThunk({ title, author, limit }));
  };

  return (
    <PageContainer>
      <Dashboard
        title={"Filters:"}
        inputs={inputs}
        titleButton={"To apply"}
        secondPart={"Start your workout"}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        validation={false}
      />
      <RecommendedList />
    </PageContainer>
  );
};

export default RecommendedPage;
