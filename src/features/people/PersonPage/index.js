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
import {
  fetchPersonDetailsPage,
  selectPerson,
} from "../personPageDetailsSlice";
import { fetchPersonPage, selectCast, selectCrew } from "./personPageSlice";
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

export const PersonPage = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPersonPage(id));
    dispatch(fetchPersonDetailsPage(id));
  }, [dispatch, id]);

  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const person = useSelector(selectPerson);

  return (
    <>
      {person.map(
        ({ profile_path, name, birthday, place_of_birth, biography }) => (
          <MainContainer>
            <Image src={`${imageBaseUrl}/w342${profile_path}`} />
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
                  alt=""
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
      <CastCrewHeader>
        {crew.length > 0 ? `movies - crew  ${"("}${crew.length}${")"}` : null}
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
                  alt=""
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
  );
};

//linijka 129 warunek wyswietlania crew, musimy zdecydowac czy ten warunek chcemy czy nie.
