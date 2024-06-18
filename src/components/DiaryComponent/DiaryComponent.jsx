import { useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import { DiaryComponentUl, ProgressWraper } from "./DiaryComponent.Styled";
import DiaryItem from "./DiaryItem/DiaryItem";

export const DiaryComponent = () => {
  const { progress } = useSelector(selectBookInfo);
  console.log("bookProgress", progress);
  return (
    <>
      <ProgressWraper>
        <>
          <DiaryComponentUl>
            {[...progress].reverse().map((el) => (
              <DiaryItem key={el._id} progress={el} />
            ))}
          </DiaryComponentUl>
        </>
      </ProgressWraper>
    </>
  );
};
