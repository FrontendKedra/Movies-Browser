import { useParams } from "react-router-dom";
import { ContentContainer, Header, Wrapper } from "./styled";
import { Loader } from "../../../common/fetchStates/Loader";
import { Error } from "../../../common/fetchStates/Error";
import { BigTile } from "../../../common/tiles/BigTile";
import { MovieTile } from "../../../common/tiles/MovieTile";
import useQueryParameter from "../../../hooks/useQueryParameter";
import { PeoplePage } from "../PeoplePage";
import { Id } from "../../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { useQuery } from "react-query";
import { getPersonDetails } from "../../../lib/people/getPersonDetails";
import { getGenres } from "../../../lib/getGenres";

export const PersonPage = () => {
  const { id } = useParams<Id>();
  const query = useQueryParameter("search");

  const { isLoading, data, isError } = useQuery(
    ["personDetails", { id }],
    getPersonDetails,
    {
      enabled: query === null,
    }
  );

  const person = data?.details || [];
  const cast = data?.credits.cast || [];
  const crew = data?.credits.crew || [];

  const genresResponse = useQuery("genres", getGenres);

  const genres = genresResponse.data?.genres || [];

  return (
    <>
      {isLoading ? (
        <Loader title="Loading..." />
      ) : isError ? (
        <Error />
      ) : query === null ? (
        <Wrapper>
          {person.map(
            ({
              profile_path,
              name,
              birthday,
              place_of_birth,
              biography,
              id,
            }) => (
              <BigTile
                title={name}
                profile_path={profile_path}
                article={biography}
                place_of_birth={place_of_birth}
                birthday={birthday}
                key={id}
              />
            )
          )}

          {cast.length > 0 && (
            <>
              <Header>
                movies - cast {`(`}
                {cast.length}
                {`)`}
              </Header>
              <ContentContainer>
                {cast.map(
                  ({
                    poster_path,
                    id,
                    credit_id,
                    title,
                    character,
                    release_date,
                    vote_average,
                    vote_count,
                    genre_ids,
                  }) => (
                    <MovieTile
                      key={credit_id}
                      id={id}
                      title={title}
                      rating={vote_average}
                      votes={vote_count}
                      poster_path={poster_path}
                      genre_ids={genre_ids}
                      character={character}
                      year={release_date}
                      genres={genres}
                    />
                  )
                )}
              </ContentContainer>
            </>
          )}

          {crew.length > 0 && (
            <>
              <Header>
                movies - crew {"("}
                {crew.length}
                {")"}
              </Header>
              <ContentContainer>
                {crew.map(
                  ({
                    job,
                    title,
                    vote_average,
                    vote_count,
                    release_date,
                    poster_path,
                    id,
                    credit_id,
                    genre_ids,
                  }) => (
                    <MovieTile
                      key={credit_id}
                      id={id}
                      title={title}
                      rating={vote_average}
                      votes={vote_count}
                      job={job}
                      year={release_date}
                      poster_path={poster_path}
                      genre_ids={genre_ids}
                      genres={genres}
                    />
                  )
                )}
              </ContentContainer>
            </>
          )}
        </Wrapper>
      ) : (
        <PeoplePage />
      )}
    </>
  );
};
