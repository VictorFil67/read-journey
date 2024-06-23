import {
  Picture,
  // NotStartedComponent,
  ProgressWrap,
  StarWraper,
  Text,
  Title,
} from "./ProgressStyled";
import Star from "../../images/reading/bookstar.png";
import Star2x from "../../images/reading/bookstar@2x.png";
import StarTab from "../../images/reading/bookstarTab.png";
import StarTab2x from "../../images/reading/bookstarTab@2x.png";
import { useEffect } from "react";

export const Progress = ({ setStart }) => {
  useEffect(() => {
    setStart(true);
  }, [setStart]);

  return (
    <ProgressWrap>
      <div>
        <Title>Progress</Title>
        <Text>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </Text>
      </div>
      <StarWraper>
        <picture>
          <source
            media="(max-width:767px)"
            srcSet={Star + " 1x, " + Star2x + " 2x"}
          />
          <source srcSet={StarTab + " 1x, " + StarTab2x + " 2x"} />
          <Picture src={Star} alt="Star" loading="lazy" />
        </picture>
        {/* <img src={Star} alt="Star" /> */}
      </StarWraper>
    </ProgressWrap>
  );
};
