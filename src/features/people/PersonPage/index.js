import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPerson,
  selectCast,
  selectCrew,
  selectPerson,
  selectPersonStatus,
} from "./personSlice";
import { ContentContainer, Header, Wrapper } from "./styled";
import { Loader } from "../../../common/states/Loader";
import { Error } from "../../../common/states/Error";
import { BigTile } from "../../../common/tiles/BigTile";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { fetchGenres } from "../../../common/tiles/MovieTile/Genre/genreSlice";
import useQueryParameter from "../../../useQueryParameter";
import { PeoplePage } from "../PeoplePage";

export const PersonPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const person = useSelector(selectPerson);
  const stateOfLoading = useSelector(selectPersonStatus);
  const query = useQueryParameter("search");

  useEffect(() => {
    query === null && dispatch(fetchPerson(id));
    dispatch(fetchGenres());
  }, [dispatch, id, query]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loader title="Loading..." />
      ) : stateOfLoading === "error" ? (
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
