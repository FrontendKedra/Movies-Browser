import { Rate, RatingsContainer, StyledStar, Votes } from "./styled";

interface RatingsProps {
  rating: number;
  votes: number;
}

export const Ratings = ({ rating, votes }: RatingsProps) => {
  return (
    <RatingsContainer>
      <StyledStar />
      <Rate>{rating.toFixed(1)}</Rate>
      <Votes>{votes} votes</Votes>
    </RatingsContainer>
  );
};
