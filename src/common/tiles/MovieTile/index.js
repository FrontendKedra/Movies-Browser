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
  genre_ids,
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
          <Genre genre_ids={genre_ids} />
        </Details>
        <StyledRatings rating={rating} votes={votes} />
      </InfoContent>
    </Container>
  );
};
