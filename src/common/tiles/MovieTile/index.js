import {
  Container,
  Details,
  InfoContent,
  Poster,
  StyledRatings,
  Title,
  Year,
} from "./styled";
import { Genre } from "./Genre";
import { imageBaseUrl } from "../../../ApiValue";
import noPoster from "./noPoster.png";

export const MovieTile = ({
  id,
  poster_path,
  title,
  release_date,
  rating,
  votes,
}) => {
  return (
    <Container key={id} id={id}>
      <Poster
        src={poster_path ? `${imageBaseUrl}/w342${poster_path}` : noPoster}
        alt={`poster of ${title}`}
      ></Poster>
      <InfoContent>
        <Details>
          <Title>{title}</Title>
          <Year>{release_date}</Year>
          <Genre />
        </Details>
        <StyledRatings rating={rating} votes={votes} />
      </InfoContent>
    </Container>

    ///Poniżej kod do sprawdzenia PersonPage///

    // <Container>
    //   <Poster
    //     src={poster_path ? `${imageBaseUrl}/w342${poster_path}` : noPoster}
    //     alt=""
    //   ></Poster>
    //   <InfoContent>
    //     <Details>
    //       <Title>Cokolwiek</Title>
    //       <Year>2022</Year>
    //       <Genre />
    //     </Details>
    //     <StyledRatings rating={"1444"} votes={"6532423"} />
    //   </InfoContent>
    // </Container>
  );
};
