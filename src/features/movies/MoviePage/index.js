import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BigTile } from "../../../common/tiles/BigTile";
import { Backdrop } from "./Backdrop";
import {
  fetchMovieDetails,
  selectMovie,
  selectMovieStatus,
} from "./movieDetailsSlice";
import { fetchMovie, selectMovieCast, selectMovieCrew } from "./movieSlice";
import { ContentContainer, Header, Wrapper } from "./styled";

import { Loader } from "../../../common/states/Loader";
import { Error } from "../../../common/states/Error";
import { StyledLink } from "./styled";
import { PersonTile } from "../../../common/tiles/PersonTile";

export const MoviePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovie(id));
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const movie = useSelector(selectMovie);
  const cast = useSelector(selectMovieCast);
  const crew = useSelector(selectMovieCrew);
  const stateOfLoading = useSelector(selectMovieStatus);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loader title="Loading popular people..." />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <>
          {movie.map(
            ({
              original_title,
              vote_average,
              vote_count,
              backdrop_path,
            }) => (
              <Backdrop
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
              }) => (
                  <BigTile
                    id={id}
                    poster_path={poster_path}
                    title={title}
                    release_date={release_date}
                    rating={vote_average}
                    votes={vote_count}
                    countries={production_countries}
                    article={overview}
                  />
              )
            )}
            {cast.length > 0 && (
              <>
                <Header>Cast</Header>
                <ContentContainer>
                  {cast.map(({ profile_path, name, character, id }) => (
                    <StyledLink to={`/profile/${id}`} key={id}>
                      <PersonTile
                        id={id}
                        profile_path={profile_path}
                        name={name}
                        character={character}
                      />
                    </StyledLink>
                  ))}
                </ContentContainer>
              </>
            )}
            {crew.length > 0 && (
              <>
                <Header>Crew</Header>
                <ContentContainer>
                  {crew.map(({ profile_path, name, job, id }) => (
                    <StyledLink to={`/profile/${id}`} key={id}>
                      <PersonTile
                        id={id}
                        profile_path={profile_path}
                        name={name}
                        character={job}
                      />
                    </StyledLink>
                  ))}
                </ContentContainer>
              </>
            )}
          </Wrapper>
        </>
      )}
    </>
  );
};
