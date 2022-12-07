import { Rate, RatingsContainer, StyledStar, Votes } from "./styled";

export const Ratings = ({ vote_average, vote_count }) => {
  return (
    <RatingsContainer>
      <StyledStar />
      <Rate>{vote_average}</Rate>
      <Votes>{vote_count} votes</Votes>
    </RatingsContainer>
  );
};
