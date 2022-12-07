import { ContentContainer, ListTitle, Wrapper } from "./styled";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPopularMovies, selectPopularMovies } from "../popularMoviesSlice";
import { MovieTile } from "../../../common/tiles/MovieTile";

export const MovieList = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <Wrapper>
      <ListTitle> Popular movies</ListTitle>
      <ContentContainer>
        {movies.map(
          ({
            id,
            title,
            poster_path,
            vote_average,
            vote_count,
            release_date,
          }) => (
            <MovieTile
              key={id}
              id={id}
              poster_path={poster_path}
              title={title}
              release_date={release_date}
              vote_average={vote_average}
              vote_count={vote_count}
            />
          )
        )}
      </ContentContainer>
    </Wrapper>
  );
};