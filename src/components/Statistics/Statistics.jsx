import DiarySVG from "../../images/DiarySVG";
import StatisticsSVG from "../../images/StatisticsSVG";
import { DiaryComponent } from "../DiaryComponent/DiaryComponent";
import { StatisticsComponent } from "../StatisticsComponent/StatisticsComponent";
import {
  DataWrap,
  ReadingStatisticsButton,
  StatisticsText,
  StatisticsWrap,
  TopWrap,
} from "./Statistics.Styled";

export const Statistics = ({ activeSection, setActiveSection }) => {
  return (
    <StatisticsWrap>
      <TopWrap>
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
      </TopWrap>
      {activeSection === "Statistics" && (
        <StatisticsText>
          Each page, each chapter is a new round of knowledge, a new step
          towards understanding. By rewriting statistics, we create our own
          reading history.
        </StatisticsText>
      )}

      <DataWrap>
        {activeSection === "Diary" && <DiaryComponent />}
        {activeSection === "Statistics" && <StatisticsComponent />}
      </DataWrap>
    </StatisticsWrap>
  );
};
