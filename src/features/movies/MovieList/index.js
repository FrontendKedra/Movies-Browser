import { ListTitle, Wrapper } from "./styled";

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
    <>
      <ListTitle> Popular movies</ListTitle>
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
            <MovieTile
              key={id}
              id={id}
              poster_path={poster_path}
              title={title}
              release_date={release_date}
              rating={vote_average}
              votes={vote_count}
            />
          )
        )}
      </Wrapper>
    </>
  );
};
