import { useForm } from "react-hook-form";
import { Dashboard } from "../../components/Dashboard/Dashboard";
// import Filter from "../../components/Filter/Filter";

import RecommendedList from "../../components/RecommendedList/RecommendedList";
import { PageContainer } from "../MyLibraryPage/MyLibraryPage.Styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recommendedBooksThunk } from "../../store/books/operations";
import { selectLimit, selectPage } from "../../store/books/selectors";
import { changePage, setLimit } from "../../store/books/booksSlise";

const RecommendedPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
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

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
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
        // title,
        // author,
        page,
        limit,
      })
    );
  }, [dispatch, page]);

  const onSubmit = ({ title, author }) => {
    dispatch(changePage(0));
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
        //  errors={errors}
        validation={false}
      />
      <RecommendedList />
      {/* {modal &&
        createPortal(<AddBookModal setModal={setModal} />, document.body)} */}
    </PageContainer>
    // <>
    //   <>
    //     <Filter />
    //     {/* <Filters /> */}
    //   </>
    //   <>
    //     <RecommendedList />
    //   </>
    // </>
  );
};

export default RecommendedPage;
