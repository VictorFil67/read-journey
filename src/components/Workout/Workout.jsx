import {
  LinkNextSVG,
  LinkStyled,
  NextSVGStyled,
} from "../RecommendedBooks/RecommendedBooks.Styled";
import {
  LinksBlock,
  Title,
  WorkoutItemContainer,
  WorkoutItemP,
  WorkoutItemSpan,
  WorkoutNamredWraper,
  WorkoutWrap,
} from "./Workout.Styled";

export const Workout = () => {
  return (
    <WorkoutWrap>
      <Title>Start your workout</Title>
      <WorkoutItemContainer>
        <WorkoutNamredWraper>1</WorkoutNamredWraper>
        <WorkoutItemSpan>
          Create a personal library:
          <WorkoutItemP>add the books you intend to read to it.</WorkoutItemP>
        </WorkoutItemSpan>
      </WorkoutItemContainer>
      <WorkoutItemContainer>
        <WorkoutNamredWraper>2</WorkoutNamredWraper>

        <WorkoutItemSpan>
          Create your first workout:
          <WorkoutItemP>
            define a goal, choose a period, start training.
          </WorkoutItemP>
        </WorkoutItemSpan>
      </WorkoutItemContainer>
      <LinksBlock>
        <LinkStyled to="/library">My library</LinkStyled>
        <LinkNextSVG to="/library">
          <NextSVGStyled />
        </LinkNextSVG>
      </LinksBlock>
    </WorkoutWrap>
  );
};
