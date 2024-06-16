import { NotStartedComponent, StarWraper } from "./ProgressStyled";
import Star from "../../images/Star.png";

export const Progress = () => {
  return (
    <NotStartedComponent>
      <div>
        <h1>Progress</h1>
        <span>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </span>
      </div>
      <StarWraper>
        <img src={Star} alt="Star" />
      </StarWraper>
    </NotStartedComponent>
  );
};
