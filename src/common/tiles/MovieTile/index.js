import {
  Container,
  Details,
  InfoContent,
  MovieWrapper,
  Poster,
  StyledRatings,
  Title,
  Wrapper,
  Year,
} from "./styled";
import Mulan from "./poster.jpg";
import { Genre } from "./Genre";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPopularMovies,
  selectPopularMovies,
} from "../../../popularMoviesSlice";

import { imageBaseUrl } from "../../../ApiValue";

export const MovieTile = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <Wrapper>
      {movies.map(
        ({
          id,
          title,
          poster_path,
          vote_average,
          vote_count,
          release_date,
        }) => (
          <Container key={id} id={id}>
            <Poster src={`${imageBaseUrl}/w342${poster_path}`} alt=""></Poster>
            <InfoContent>
              <Details>
                <Title>{title}</Title>
                <Year>{release_date}</Year>
                <Genre />
              </Details>
              <StyledRatings rating={vote_average} votes={vote_count} />
            </InfoContent>
          </Container>
        )
      )}
    </Wrapper>
  );
};
