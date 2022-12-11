import { ContentContainer, ListTitle, StyledLink, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPopularMovies,
  selectPopularMovies,
  selectPopularMoviesStatus,
} from "../popularMoviesSlice";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { Loader } from "../../../common/States/Loader";
import { Error } from "../../../common/States/Error";

export const MovieList = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectPopularMovies);
  const stateOfLoading = useSelector(selectPopularMoviesStatus);
  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loader title="Loading popular movies..." />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
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
                <StyledLink to={`/movie-page/${id}`} key={id}>
                  <MovieTile
                    id={id}
                    poster_path={poster_path}
                    title={title}
                    release_date={release_date}
                    rating={vote_average}
                    votes={vote_count}
                  />
                </StyledLink>
              )
            )}
          </ContentContainer>
        </Wrapper>
      )}
    </>
  );
};
