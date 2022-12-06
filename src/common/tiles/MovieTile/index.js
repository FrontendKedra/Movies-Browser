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
  vote_average,
  vote_count,
}) => {
  return (
    <Container key={id} id={id}>
      <Poster
        src={poster_path ? `${imageBaseUrl}/w342${poster_path}` : noPoster}
        alt=""
      ></Poster>
      <InfoContent>
        <Details>
          <Title>{title}</Title>
          <Year>{release_date}</Year>
          <Genre />
        </Details>
        <StyledRatings rating={vote_average} votes={vote_count} />
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
