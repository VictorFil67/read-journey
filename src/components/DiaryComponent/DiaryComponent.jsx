import { useDispatch, useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import { DiaryComponentUl, ProgressWraper } from "./DiaryComponent.Styled";
import DiaryItem from "../DiaryItem/DiaryItem";
import { toast } from "react-toastify";
import { deleteReadingThunk } from "../../store/books/operations";

export const DiaryComponent = () => {
  const { progress, _id } = useSelector(selectBookInfo);
  const dispatch = useDispatch();
  console.log("bookProgress", progress);

  const handleDeleteRecord = async (readingId) => {
    try {
      await dispatch(deleteReadingThunk({ bookId: _id, readingId })).unwrap();
      toast.success("Reading record deleted successfully!");
    } catch (error) {
      toast.error("Error deleting reading record: " + error.message);
    }
  };

  return (
    <>
      <ProgressWraper>
        <>
          <DiaryComponentUl>
            {progress &&
              [...progress]
                .reverse()
                .map((el) => (
                  <DiaryItem
                    key={el._id}
                    progress={el}
                    handleDeleteRecord={handleDeleteRecord}
                  />
                ))}
          </DiaryComponentUl>
        </>
      </ProgressWraper>
    </>
  );
};
