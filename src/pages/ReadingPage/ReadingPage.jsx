import { useDispatch, useSelector } from "react-redux";
import { selectbookInfo } from "../../store/books/selectors";
// import { useParams } from "react-router-dom";
import { getBookInfo } from "../../store/books/operations";
import { useEffect } from "react";
import { PageContainer } from "../MyLibraryPage/MyLibraryPage.Styled";
import { Dashboard } from "../../components/Dashboard/Dashboard";
// import Progress from "../../components/Progress/Progress";
// import ReadingBook from "../../components/ReadingBook/ReadingBook";

const ReadingPage = () => {
  const { _id, progress } = useSelector(selectbookInfo);
  const dispatch = useDispatch();
  const inputs = [
    {
      title: "Page number:",
      placeholder: "0",
      name: "pageNumber",
      type: "number",
    },
  ];

  // const { register, handleSubmit } = useForm({
  //   mode: "onChange",
  // });

  useEffect(() => {
    console.log(_id);
    dispatch(getBookInfo(_id));
  }, [_id, dispatch]);

  return (
    <PageContainer>
      <Dashboard
        title={
          progress?.length === 0 ||
          progress[progress?.length - 1].status === "inactive"
            ? "Start page:"
            : "Stop page:"
        }
        inputs={inputs}
        titleButton={
          progress?.length === 0 ||
          progress[progress?.length - 1].status === "inactive"
            ? "To start"
            : "To stop"
        }
        secondPart={progress?.length === 0 ? "Progress" : "Workout info"}
        // register={register}
        // handleSubmit={handleSubmit}
        // onSubmit={onSubmit}
        validation={false}
      />
      {/* <RecommendedList /> */}
    </PageContainer>
  );
};

export default ReadingPage;
