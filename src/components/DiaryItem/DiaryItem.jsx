import { format } from "date-fns";

import { selectBookInfo } from "../../store/books/selectors";
import { useSelector } from "react-redux";
import BlackWhiteSquare from "../../images/BlackWhiteSquare";
import {
  BlackWhiteSquareWrapper,
  DeleteRecordButton,
  DeleteRecordPageHourDiv,
  DeleteRecordPagesSpan,
  DeleteRecordVectorWraper,
  DeleteRecordWraper,
  DiaryDateLeftWraper,
  DiaryDateLi,
  DiaryDatePercentageWraper,
  DiaryDateRightWraper,
  DiaryDateWraper,
  PerHour,
  ReadingSpeed,
} from "./DiaryItem.Styled";
import VectorSVG from "../../images/VectorSVG";
import DeleteRecord from "../../images/DeleteRecord";

const DiaryItem = ({ progress }) => {
  const bookInfo = useSelector(selectBookInfo);
  const formattedDate = format(new Date(progress.startReading), "dd.MM.yyyy");
  const startTime = new Date(progress.startReading);
  const endTime = new Date(progress.finishReading);

  const diffSec = ((endTime - startTime) / 1000).toFixed();
  const diffMin = ((endTime - startTime) / (60 * 1000)).toFixed();
  // console.log("diffSec: " + diffSec);
  // console.log("diffMin: " + diffMin);
  // console.log(progress.startPage);
  // console.log(progress.finishPage);

  let time;
  if (diffSec) {
    if (diffSec < 60) {
      time = `${diffSec} seconds`;
    } else if (diffSec >= 60 && diffSec < 90) {
      time = `${diffMin} minute`;
    } else {
      time = `${diffMin} minutes`;
    }
  }

  let pagesRead;
  if (progress.finishPage && progress.startPage) {
    pagesRead = progress.finishPage - progress.startPage;
  } else {
    pagesRead = 0;
  }

  let percentageRead;
  if (pagesRead) {
    percentageRead = ((pagesRead / bookInfo.totalPages) * 100).toFixed(1);
  } else {
    percentageRead = 0;
  }

  return (
    <>
      <DiaryDateLi>
        <>
          <DiaryDateLeftWraper>
            <>
              <>
                <BlackWhiteSquareWrapper>
                  <BlackWhiteSquare />
                </BlackWhiteSquareWrapper>
              </>
              <>
                <DiaryDateWraper>
                  <span>{formattedDate}</span>

                  <DiaryDatePercentageWraper>
                    <span>{percentageRead}%</span>
                    {/* <span>{durationText}</span> */}
                    <span>{time}</span>
                  </DiaryDatePercentageWraper>
                </DiaryDateWraper>
              </>
            </>
          </DiaryDateLeftWraper>
        </>
        <>
          <DiaryDateRightWraper>
            <>
              <>
                <DeleteRecordPagesSpan>{pagesRead} pages</DeleteRecordPagesSpan>
              </>
              <>
                <DeleteRecordVectorWraper>
                  <DeleteRecordWraper>
                    <VectorSVG />
                    <DeleteRecordButton>
                      <DeleteRecord />
                    </DeleteRecordButton>
                  </DeleteRecordWraper>

                  <DeleteRecordPageHourDiv>
                    <ReadingSpeed>{progress.speed} pages</ReadingSpeed>
                    <PerHour>per hour</PerHour>
                  </DeleteRecordPageHourDiv>
                </DeleteRecordVectorWraper>
              </>
            </>
          </DiaryDateRightWraper>
        </>
      </DiaryDateLi>
    </>
  );
};

export default DiaryItem;
