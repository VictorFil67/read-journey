import { selectBookInfo } from "../../store/books/selectors";
import { useSelector } from "react-redux";
import {
  DeleteRecordButton,
  DeleteRecordPageHourDiv,
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
import VectorSVG from "../../images/reading/VectorSVG";
import DeleteRecord from "../../images/DeleteRecord";

const DiaryItem = ({ progress, handleDeleteRecord }) => {
  const bookInfo = useSelector(selectBookInfo);
  const startTime = new Date(progress.startReading);
  const endTime = new Date(progress.finishReading);

  const diffSec = ((endTime - startTime) / 1000).toFixed();
  const diffMin = ((endTime - startTime) / (60 * 1000)).toFixed();

  let time;
  if (diffSec) {
    if (diffSec < 60) {
      time = `${diffSec} seconds`;
    } else if (diffSec >= 60 && diffSec < 90) {
      time = `${diffMin} minute`;
    } else if (diffSec > 90) {
      time = `${diffMin} minutes`;
    } else {
      time = `0 minutes`;
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
        <DiaryDateLeftWraper>
          <DiaryDateWraper>
            <DiaryDatePercentageWraper>
              <span>{percentageRead}%</span>

              <span>{time}</span>
            </DiaryDatePercentageWraper>
          </DiaryDateWraper>
        </DiaryDateLeftWraper>
        <>
          <DiaryDateRightWraper>
            <DeleteRecordVectorWraper>
              <DeleteRecordWraper>
                <VectorSVG />
                <DeleteRecordButton
                  onClick={() => handleDeleteRecord(progress._id)}
                >
                  <DeleteRecord />
                </DeleteRecordButton>
              </DeleteRecordWraper>
              <DeleteRecordPageHourDiv>
                <ReadingSpeed>
                  {progress.speed ? progress.speed : 0} pages
                </ReadingSpeed>
                <PerHour>per hour</PerHour>
              </DeleteRecordPageHourDiv>
            </DeleteRecordVectorWraper>
          </DiaryDateRightWraper>
        </>
      </DiaryDateLi>
    </>
  );
};

export default DiaryItem;
