import { useParams } from "react-router-dom";
import { BigTile } from "../../../common/tiles/BigTile";
import { Backdrop } from "./Backdrop";
import { ContentContainer, Header, Wrapper } from "./styled";
import { Loader } from "../../../common/fetchStates/Loader";
import { Error } from "../../../common/fetchStates/Error";
import { PersonTile } from "../../../common/tiles/PersonTile";
import useQueryParameter from "../../../useQueryParameter";
import { MovieList } from "../MovieList";
import { Id } from "../../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { useQuery } from "react-query";
import { getMovieDetails } from "../../../api/movies/getMovieDetails";

export const MoviePage = () => {
  const { id } = useParams<Id>();
  const query = useQueryParameter("search");

  const { isLoading, data, isError } = useQuery(
    ["movieDetails", { id }],
    getMovieDetails,
    {
      enabled: query === null,
    }
  );

  const movie = data?.details || [];
  const cast = data?.credits.cast || [];
  const crew = data?.credits.crew || [];

  return (
    <>
      {isLoading ? (
        <Loader title="Loading..." />
      ) : isError ? (
        <Error />
      ) : query === null ? (
        <>
          {movie.map(
            ({
              original_title,
              vote_average,
              vote_count,
              backdrop_path,
              id,
            }) => (
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
