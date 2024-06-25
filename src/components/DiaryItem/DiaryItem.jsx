// import { format } from "date-fns";

import { selectBookInfo } from "../../store/books/selectors";
import { useSelector } from "react-redux";
// import BlackWhiteSquare from "../../images/BlackWhiteSquare";
import {
  // BlackWhiteSquareWrapper,
  DeleteRecordButton,
  DeleteRecordPageHourDiv,
  // DeleteRecordPagesSpan,
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

  // useEffect(() => {
  // const totalPages =
  //   progress[0]?.finishPage - progress[progress.length - 1]?.startPage;
  // setdayPages(totalPages);
  // console.log(progress);
  // }, [progress, setdayPages]);

  let time;
  if (diffSec) {
    if (diffSec < 60) {
      time = `${diffSec} seconds`;
      console.log(startTime);
      console.log(endTime);
    } else if (diffSec >= 60 && diffSec < 90) {
      time = `${diffMin} minute`;
      console.log("diffSec >= 60 && diffSec < 90");
    } else if (diffSec > 90) {
      time = `${diffMin} minutes`;
      console.log("minutes");
    } else {
      time = `0 minutes`;
      console.log(`0 minutes`);
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
          {/* <BlackWhiteSquareWrapper>
            <BlackWhiteSquare />
          </BlackWhiteSquareWrapper> */}

          <DiaryDateWraper>
            {/* <span>{formattedDate}</span> */}

            <DiaryDatePercentageWraper>
              <span>{percentageRead}%</span>
              {/* <span>{durationText}</span> */}
              <span>{time}</span>
            </DiaryDatePercentageWraper>
          </DiaryDateWraper>
        </DiaryDateLeftWraper>
        <>
          <DiaryDateRightWraper>
            <>
              <>
                {/* <DeleteRecordPagesSpan>{pagesRead} pages</DeleteRecordPagesSpan> */}
              </>
              <>
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
              </>
            </>
          </DiaryDateRightWraper>
        </>
      </DiaryDateLi>
    </>
  );
};

export default DiaryItem;
