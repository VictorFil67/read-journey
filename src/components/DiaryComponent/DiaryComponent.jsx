import { useDispatch, useSelector } from "react-redux";
import {
  selectBookInfo,
  selectProgressByDate,
} from "../../store/books/selectors";
import {
  BlackWhiteSquareWrapper,
  DateLeftWrap,
  DateLi,
  DateRightWrap,
  DateUl,
  DateWrap,
  DiaryComponentUl,
  PagesSpan,
  ProgressWraper,
  TopWrap,
} from "./DiaryComponent.Styled";
import DiaryItem from "../DiaryItem/DiaryItem";
import { toast } from "react-toastify";
import { deleteReadingThunk } from "../../store/books/operations";
import { useEffect, useRef } from "react";
import { setProgressByDate } from "../../store/books/booksSlise";
// import { BlackWhiteSquareWrapper } from "../DiaryItem/DiaryItem.Styled";
import BlackWhiteSquare from "../../images/BlackWhiteSquare";

export const DiaryComponent = () => {
  const { progress, _id } = useSelector(selectBookInfo);
  const progressByDate = useSelector(selectProgressByDate);
  const dispatch = useDispatch();
  const ulRef = useRef();
  // const [dayPages, setdayPages] = useState(0);
  console.log("bookProgress", progress);
  console.log("progressByDate", progressByDate);

  useEffect(() => {
    if (progress?.length > 0) {
      dispatch(setProgressByDate(transform(progress)));
    }
  }, [dispatch, progress]);

  function transform(arr) {
    const datesObject = arr.reduce((acc, progress) => {
      console.log(acc);
      const date = new Date(progress.startReading).toLocaleDateString();
      console.log(acc[date]);
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(progress);
      console.log(acc);
      console.log(acc[date]);
      return acc;
    }, {});
    console.log(datesObject);
    const dates = [...Object.keys(datesObject)].sort((a, b) =>
      b.localeCompare(a)
    );
    console.log(dates);
    const transformedProgress = dates.map((date) => ({
      date,
      progress: datesObject[date].sort((a, b) =>
        b.startReading.localeCompare(a.startReading)
      ),
    }));
    console.log(transformedProgress);
    return transformedProgress;
  }

  const ulHeight = ulRef.current?.getBoundingClientRect().height;
  console.log(ulHeight);

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
          <DiaryComponentUl ref={ulRef}>
            {/* {progress && */}
            {progressByDate &&
              // [...progress]
              //   .reverse()
              progressByDate.map((el) => (
                <DateLi key={el.date}>
                  <TopWrap>
                    <DateLeftWrap>
                      <BlackWhiteSquareWrapper>
                        <BlackWhiteSquare />
                      </BlackWhiteSquareWrapper>
                      <DateWrap>
                        <span>{el.date}</span>
                      </DateWrap>
                    </DateLeftWrap>
                    <DateRightWrap>
                      <PagesSpan>
                        {el.progress[0]?.finishPage -
                          el.progress[el.progress.length - 1]?.startPage}{" "}
                        pages
                      </PagesSpan>
                    </DateRightWrap>
                  </TopWrap>
                  <DateUl>
                    {el.progress.map((item) => (
                      <DiaryItem
                        key={item._id}
                        progress={item}
                        // date={el}
                        handleDeleteRecord={handleDeleteRecord}
                        // setdayPages={setdayPages}
                      />
                    ))}
                  </DateUl>
                </DateLi>
              ))}
          </DiaryComponentUl>
        </>
      </ProgressWraper>
    </>
  );
};
