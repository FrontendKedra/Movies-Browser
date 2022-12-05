import {
  BackdropContainer,
  Details,
  MaxRates,
  Rates,
  RatingContainer,
  StarIcon,
  Title,
  Votes,
  Wrapper,
} from "./styled";
import { StyledBackdrop } from "./styled";

export const Backdrop = () => {
  return (
    <Wrapper>
      <BackdropContainer>
        <Details>
          <Title>Mulan long title</Title>
          <RatingContainer>
            <StarIcon />
            <Rates>7,8</Rates>
            <MaxRates>/ 10</MaxRates>
          </RatingContainer>
          <Votes>135 votes</Votes>
        </Details>
        <StyledBackdrop
          src={
            "https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
          }
          alt=""
        ></StyledBackdrop>
      </BackdropContainer>
    </Wrapper>
  );
};
