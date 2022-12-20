import { Rate, RatingsContainer, StyledStar, Votes } from "./styled";

export const Ratings = ({ rating, votes }) => {
  return (
    <RatingsContainer>
      <StyledStar />
      <Rate>{rating.toFixed(1)}</Rate>
      <Votes>{votes} votes</Votes>
    </RatingsContainer>
  );
};
