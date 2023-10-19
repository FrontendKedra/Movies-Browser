import { BackdropProps } from "../../../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { imageBaseUrl } from "../../../../api/ApiValue";
import {
  BackdropImg,
  BlureFrame,
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

export const Backdrop = ({
  title,
  rating,
  votes,
  backdrop_path,
}: BackdropProps) => (
  <>
    {backdrop_path && (
      <Wrapper>
        <Container>
          <BlureFrame />
          <BackdropImg
            src={`${imageBaseUrl}/w1280${backdrop_path}`}
            alt={`poster of ${title}`}
          />
          <Content>
            <Title>{title}</Title>
            <RatingContainer>
              <StarIcon />
              <Vote>{rating.toFixed(1)}</Vote>
              <Rate>/ 10</Rate>
              <Votes>{votes} votes</Votes>
            </RatingContainer>
          </Content>
        </Container>
      </Wrapper>
    )}
  </>
);
