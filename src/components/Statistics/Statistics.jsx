import { useState } from "react";
import DiarySVG from "../../images/DiarySVG";
import StatisticsSVG from "../../images/StatisticsSVG";
import { DiaryComponent } from "../DiaryComponent/DiaryComponent";
import { StatisticsComponent } from "../StatisticsComponent/StatisticsComponent";
import {
  ReadingStatisticsButton,
  SectionSelectionWraper,
  StatisticsWraper,
} from "./Statistics.Styled";
import { useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";

export const Statistics = () => {
  const [activeSection, setActiveSection] = useState("Diary");
  const bookInfo = useSelector(selectBookInfo);

  return (
    <>
      <SectionSelectionWraper>
        <h1>{activeSection}</h1>
        <div>
          <ReadingStatisticsButton onClick={() => setActiveSection("Diary")}>
            <DiarySVG active={activeSection === "Diary"} />
          </ReadingStatisticsButton>
          <ReadingStatisticsButton
            onClick={() => setActiveSection("Statistics")}
          >
            <StatisticsSVG active={activeSection === "Statistics"} />
          </ReadingStatisticsButton>
        </div>
      </SectionSelectionWraper>
      <StatisticsWraper>
        {activeSection === "Diary" && <DiaryComponent />}
        {activeSection === "Statistics" && <StatisticsComponent />}
      </StatisticsWraper>
    </>
  );
};
