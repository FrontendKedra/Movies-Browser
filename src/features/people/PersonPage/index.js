import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { imageBaseUrl } from "../../../ApiValue";
import {
  GenreContainer,
  GenreItem,
} from "../../../common/tiles/MovieTile/Genre/styled";
import {
  Container,
  Details,
  InfoContent,
  Poster,
  Title,
  Year,
} from "../../../common/tiles/MovieTile/styled";
import { Wrapper } from "../../movies/MovieList/styled";
import noPoster from "../../../common/tiles/MovieTile/noPoster.png";
import {
  Rate,
  RatingsContainer,
  StyledStar,
  Votes,
} from "../../../common/tiles/MovieTile/Ratings/styled";
import { fetchPersonDetails, selectPerson } from "../personDetailsSlice";
import { fetchPerson, selectCast, selectCrew } from "./personSlice";
import {
  TileContainer,
  MainContainer,
  Article,
  Image,
  SubHeaderInformation,
  SubHeaderContainer,
  BigTileTitle,
  MaxRating,
} from "../../../common/tiles/BigTile/styled";
import { SubHeaderDate, SubHeaderPerson, CastCrewHeader } from "./styled";
import noProfile from "../../../common/tiles/PersonTile/noPicture.png";

export const PersonPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPerson(id));
    dispatch(fetchPersonDetails(id));
  }, [dispatch, id]);

  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const person = useSelector(selectPerson);

  return (
    <>
      {person.map(
        ({ profile_path, name, birthday, place_of_birth, biography }) => (
          <MainContainer>
            <Image
              src={
                profile_path ? `${imageBaseUrl}/w342${profile_path}` : noProfile
              }
              alt={`image of ${name}`}
            />
            <TileContainer>
              <BigTileTitle>{name}</BigTileTitle>
              <SubHeaderContainer>
                <SubHeaderPerson>
                  <SubHeaderDate>date of birth:</SubHeaderDate>
                  <SubHeaderInformation>{birthday}</SubHeaderInformation>
                  <SubHeaderDate>
                    {place_of_birth ? "place of birth:" : null}
                  </SubHeaderDate>
                  <SubHeaderInformation>{place_of_birth}</SubHeaderInformation>
                </SubHeaderPerson>
              </SubHeaderContainer>
            </TileContainer>
            <Article>{biography}</Article>
          </MainContainer>
        )
      )}
      {cast.length > 0 && (
        <>
          <CastCrewHeader>
            movies - cast {`(`}
            {cast.length}
            {`)`}
          </CastCrewHeader>
          <Wrapper>
            {cast.map(
              ({
                poster_path,
                id,
                title,
                character,
                release_date,
                vote_average,
                vote_count,
              }) => (
                <>
                  <Container key={id}>
                    <Poster
                      src={
                        poster_path
                          ? `${imageBaseUrl}/w342${poster_path}`
                          : noPoster
                      }
                      alt={`image of ${character}`}
                    ></Poster>
                    <InfoContent>
                      <Details>
                        <Title>{title}</Title>
                        <Year>
                          {character} {character ? release_date : null}
                        </Year>
                        <GenreContainer>
                          <GenreItem>Action</GenreItem>
                          <GenreItem>Adventure</GenreItem>
                        </GenreContainer>
                      </Details>
                      <RatingsContainer>
                        <StyledStar />
                        <Rate>{vote_average}</Rate>
                        <MaxRating>/ 10</MaxRating>
                        <Votes>{vote_count} votes</Votes>
                      </RatingsContainer>
                    </InfoContent>
                  </Container>
                </>
              )
            )}
          </Wrapper>
        </>
      )}

      {crew.length > 0 && (
        <>
          <CastCrewHeader>
            movies - crew {"("}
            {crew.length}
            {")"}
          </CastCrewHeader>
          <Wrapper>
            {crew.map(
              ({
                job,
                title,
                vote_average,
                vote_count,
                release_date,
                poster_path,
                id,
              }) => (
                <>
                  <Container key={id}>
                    <Poster
                      src={
                        poster_path
                          ? `${imageBaseUrl}/w342${poster_path}`
                          : noPoster
                      }
                      alt={`image of ${job}`}
                    ></Poster>
                    <InfoContent>
                      <Details>
                        <Title>{title}</Title>
                        <Year>
                          {job} {job ? release_date : null}
                        </Year>
                        <GenreContainer>
                          <GenreItem>Action</GenreItem>
                          <GenreItem>Adventure</GenreItem>
                        </GenreContainer>
                      </Details>
                      <RatingsContainer>
                        <StyledStar />
                        <Rate>{vote_average}</Rate>
                        <MaxRating>/10</MaxRating>
                        <Votes>{vote_count} votes</Votes>
                      </RatingsContainer>
                    </InfoContent>
                  </Container>
                </>
              )
            )}
          </Wrapper>
        </>
      )}
    </>
  );
};

//linijka 129 warunek wyswietlania crew, musimy zdecydowac czy ten warunek chcemy czy nie.
