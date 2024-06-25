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

import BlackWhiteSquare from "../../images/BlackWhiteSquare";

export const DiaryComponent = () => {
  const { progress, _id } = useSelector(selectBookInfo);
  const progressByDate = useSelector(selectProgressByDate);
  const dispatch = useDispatch();
  const ulRef = useRef();

  useEffect(() => {
    if (progress?.length > 0) {
      dispatch(setProgressByDate(transform(progress)));
    }
  }, [dispatch, progress]);

  function transform(arr) {
    const datesObject = arr.reduce((acc, progress) => {
      const date = new Date(progress.startReading).toLocaleDateString();

      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(progress);

      return acc;
    }, {});

    const dates = [...Object.keys(datesObject)].sort((a, b) =>
      b.localeCompare(a)
    );

    const transformedProgress = dates.map((date) => ({
      date,
      progress: datesObject[date].sort((a, b) =>
        b.startReading.localeCompare(a.startReading)
      ),
    }));

    return transformedProgress;
  }

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
            {progressByDate &&
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
                        handleDeleteRecord={handleDeleteRecord}
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
