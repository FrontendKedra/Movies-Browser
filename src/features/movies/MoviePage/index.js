import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BigTile } from "../../../common/tiles/BigTile";
import { Backdrop } from "./Backdrop";
import {
  fetchMovieDetails,
  selectMovie,
  selectMovieStatus,
  selectMovieCast,
  selectMovieCrew,
} from "./movieDetailsSlice";
import { ContentContainer, Header, Wrapper } from "./styled";
import { Loader } from "../../../common/fetchStates/Loader";
import { Error } from "../../../common/fetchStates/Error";
import { PersonTile } from "../../../common/tiles/PersonTile";
import useQueryParameter from "../../../useQueryParameter";
import { MovieList } from "../MovieList";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const cast = useSelector(selectMovieCast);
  const crew = useSelector(selectMovieCrew);
  const stateOfLoading = useSelector(selectMovieStatus);
  const query = useQueryParameter("search");

  useEffect(() => {
    query === null && dispatch(fetchMovieDetails(id));
  }, [dispatch, id, query]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loader title="Loading..." />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : query === null ? (
        <>
          {movie.map(
            ({ original_title, vote_average, vote_count, backdrop_path, id}) => (
              <Backdrop
                key={id}
                title={original_title}
                rating={vote_average}
                votes={vote_count}
                backdrop_path={backdrop_path}
              />
            )
          )}
          <Wrapper>
            {movie.map(
              ({
                id,
                poster_path,
                title,
                release_date,
                production_countries,
                vote_average,
                vote_count,
                overview,
                genres,
              }) => (
                <BigTile
                  key={id}
                  id={id}
                  poster_path={poster_path}
                  title={title}
                  release_date={release_date}
                  rating={vote_average}
                  votes={vote_count}
                  countries={production_countries}
                  article={overview}
                  genres={genres}
                />
              )
            )}
            {cast.length > 0 && (
              <>
                <Header>Cast</Header>
                <ContentContainer>
                  {cast.map(
                    ({ profile_path, name, character, id, credit_id }) => (
                      <PersonTile
                        key={credit_id}
                        big
                        id={id}
                        profile_path={profile_path}
                        name={name}
                        character={character}
                      />
                    )
                  )}
                </ContentContainer>
              </>
            )}
            {crew.length > 0 && (
              <>
                <Header>Crew</Header>
                <ContentContainer>
                  {crew.map(({ profile_path, name, job, id, credit_id }) => (
                    <PersonTile
                      key={credit_id}
                      big
                      id={id}
                      profile_path={profile_path}
                      name={name}
                      character={job}
                    />
                  ))}
                </ContentContainer>
              </>
            )}
          </Wrapper>
        </>
      ) : (
        <MovieList />
      )}
    </>
  );
};
