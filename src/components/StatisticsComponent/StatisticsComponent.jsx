import { useEffect, useState } from "react";
import {
  CircleBackground,
  CircleProgress,
  CircularRange,
  ContainerRange,
  GreenSquare,
  ProgressCircle,
  StatisticsComponentWraper,
  StatisticsPagesWraper,
  StatisticsValueWraper,
  ValueDisplay,
} from "./StatisticsComponent.Styled";
import { selectBookInfo } from "../../store/books/selectors";
import { useSelector } from "react-redux";

export const StatisticsComponent = () => {
  const bookInfo = useSelector(selectBookInfo);
  const { progress } = useSelector(selectBookInfo);
  const [value, setValue] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (bookInfo && progress?.length > 0) {
      const lastProgress = progress[progress.length - 1];
      const lastPage = lastProgress.finishPage || lastProgress.startPage;
      const percentageRead = ((lastPage / bookInfo.totalPages) * 100).toFixed(
        2
      );
      setValue(percentageRead);
      setTotalPage(lastPage);
    }
  }, [bookInfo, progress]);

  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <>
      <StatisticsComponentWraper>
        <ContainerRange>
          <ProgressCircle viewBox="0 0 200 200">
            <CircleBackground cx="100" cy="100" r={radius} />
            <CircleProgress
              cx="100"
              cy="100"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </ProgressCircle>
          <CircularRange value={value} disabled />
          <ValueDisplay>{value}%</ValueDisplay>
        </ContainerRange>
        <StatisticsValueWraper>
          <GreenSquare />
          <StatisticsPagesWraper>
            <span>{value}%</span>
            <span>{totalPage} pages read</span>
          </StatisticsPagesWraper>
        </StatisticsValueWraper>
      </StatisticsComponentWraper>
    </>
  );
};
