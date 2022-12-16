import {
  Button,
  ContentContainer,
  ListTitle,
  PageChanger,
  PageCounter,
  Text,
  Wrapper,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  selectPopularMovies,
  selectPopularMoviesStatus,
  selectPopularMoviesTotalPages,
  selectPopularMoviesTotalResults,
} from "../popularMoviesSlice";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { Loader } from "../../../common/states/Loader";
import { Error } from "../../../common/states/Error";
import { ReactComponent as Previous } from "./previousArrow.svg";
import { ReactComponent as Next } from "./nextArrow.svg";
import { Search } from "../../Search";
import useQueryParameter from "../../useQueryParameter";
import { NoResult } from "../../../common/states/NoResult";
import { fetchGenres } from "../../../common/tiles/MovieTile/Genre/genreSlice";

export const MovieList = () => {
  const dispatch = useDispatch();

  const movies = useSelector(selectPopularMovies);
  const stateOfLoading = useSelector(selectPopularMoviesStatus);
  const query = useQueryParameter("search");

  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectPopularMoviesTotalPages);
  const totalResults = useSelector(selectPopularMoviesTotalResults);

  useEffect(() => {
    dispatch(fetchPopularMovies({ page, query }));
    dispatch(fetchGenres());
  }, [dispatch, page, query]);

  return (
    <>
      <Search />
      {stateOfLoading === "loading" ? (
        <Loader title="Loading..." />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Wrapper>
          {!movies.length ? (
            <NoResult query={query} />
          ) : (
            <>
              <ListTitle>
                {query
                  ? `Search results for "${query}" (${totalResults})`
                  : "Popular movies"}
              </ListTitle>
              <ContentContainer>
                {movies.map(
                  ({
                    id,
                    title,
                    poster_path,
                    vote_average,
                    vote_count,
                    release_date,
                    genre_ids,
                  }) => (
                    <MovieTile
                      key={id}
                      genre_ids={genre_ids}
                      id={id}
                      poster_path={poster_path}
                      title={title}
                      release_date={release_date}
                      rating={vote_average}
                      votes={vote_count}
                    />
                  )
                )}
              </ContentContainer>
              <PageChanger>
                <Button disabled={page === 1} onClick={() => setPage(1)}>
                  <Previous /> First
                </Button>
                <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
                  <Previous /> Previous
                </Button>
                <PageCounter>
                  {" "}
                  <Text>Page</Text> {page} <Text>of</Text>
                  {totalPages}
                </PageCounter>
                <Button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  forward
                >
                  Next
                  <Next />
                </Button>
                <Button
                  disabled={page === totalPages}
                  onClick={() => setPage(totalPages)}
                  forward
                >
                  {" "}
                  Last
                  <Next />
                </Button>
              </PageChanger>
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};
