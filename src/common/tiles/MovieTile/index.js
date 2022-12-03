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
  );
};
