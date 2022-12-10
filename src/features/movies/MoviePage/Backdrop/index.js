import {
  BlureFrames,
  Container,
  Content,
  Rate,
  RatingContainer,
  StarIcon,
  Title,
  Vote,
  Votes,
  Wrapper,
} from "./styled";
import { BackdropImg } from "./styled";

export const Backdrop = () => {
  return (
    <Wrapper>
      <Container>
        <BlureFrames />
        <BackdropImg src={"https://image.tmdb.org/t/p/w1280/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"} alt="" />
        <Content>
          <Title>Mulan long title</Title>
          <RatingContainer>
            <StarIcon />
            <Vote>10</Vote>
            <Rate>/ 10</Rate>
            <Votes>135 votes</Votes>
          </RatingContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};
