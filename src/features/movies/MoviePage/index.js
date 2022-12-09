import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { imageBaseUrl } from "../../../ApiValue";
import { BigTile } from "../../../common/tiles/BigTile";
import { Backdrop } from "./Backdrop";
import { fetchMovieDetails, selectMovie } from "./movieDetailsSlice";
import { fetchMovie, selectMovieCast, selectMovieCrew } from "./movieSlice";
import { Character, ContentContainer, Header } from "./styled";
import {
  Container,
  Name,
  ProfileImage,
} from "../../../common/tiles/PersonTile/styled";
import noPicture from "../../../common/tiles/PersonTile/noPicture.png";
import { Wrapper } from "../MovieList/styled";

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

  return (
    <>
      <Backdrop />
      <ContentContainer>
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
      </ContentContainer>
      {cast.length > 0 && (
        <>
          <Header>Cast</Header>
          <Wrapper>
            {cast.map(({ profile_path, name, character, id }) => (
              <Container key={id} id={id}>
                <ProfileImage
                  src={
                    profile_path
                      ? `${imageBaseUrl}/w342${profile_path}`
                      : noPicture
                  }
                  alt={`image of ${name}`}
                ></ProfileImage>
                <Name>{name}</Name>
                <Character>{character}</Character>
              </Container>
            ))}
          </Wrapper>
        </>
      )}

      {crew.length > 0 && (
        <>
          <Header>Crew</Header>
          <Wrapper>
            {crew.map(({ profile_path, name, job, id }) => (
              <Container key={id} id={id}>
                <ProfileImage
                  src={
                    profile_path
                      ? `${imageBaseUrl}/w342${profile_path}`
                      : noPicture
                  }
                  alt={`image of ${name}`}
                ></ProfileImage>
                <Name>{name}</Name>
                <Character>{job}</Character>
              </Container>
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};
