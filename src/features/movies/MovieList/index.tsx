import { ContentContainer, ListTitle } from "./styled";
import { useEffect } from "react";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { Loader } from "../../../common/fetchStates/Loader";
import { Error } from "../../../common/fetchStates/Error";
import useQueryParameter from "../../../hooks/useQueryParameter";
import { NoResult } from "../../../common/fetchStates/NoResult";
import { Pagination } from "../../../common/Pagination";
import { Wrapper } from "../../../common/tiles/generisStyles/styled";
import { useQuery, useQueryClient } from "react-query";
import { usePageNumber } from "../../../hooks/usePageNumber";
import { getMovies } from "../../../api/movies/getMovies";
import { getGenres } from "../../../api/getGenres";

export const MovieList = () => {
  const [page] = usePageNumber();
  const query = useQueryParameter("search");
  const queryClient = useQueryClient();

  const { isLoading, data, isError } = useQuery(
    ["popularMovies", { page, query }],
    getMovies
  );

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 0;
  const totalResults = data?.total_results || 0;
  const limitedTotalPages = totalPages > 500 ? 500 : totalPages;

  useEffect(() => {
    if (page + 1 < limitedTotalPages)
      queryClient.prefetchQuery(
        ["popularMovies", { page: page + 1, query }],
        getMovies
      );
  }, [page, queryClient, query, limitedTotalPages]);

  const genresResponse = useQuery("genres", getGenres);

  const genres = genresResponse.data?.genres || [];

  return (
    <>
      {isLoading ? (
        <Loader title="Loading..." />
      ) : isError ? (
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
                  : `Popular movies`}
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
                      genres={genres}
                    />
                  )
                )}
              </ContentContainer>
              <Pagination totalPages={limitedTotalPages} />
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};
