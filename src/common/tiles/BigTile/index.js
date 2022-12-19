import { imageBaseUrl } from "../../../ApiValue";
import {
  MainContainer,
  Image,
  TileContainer,
  BigTileTitle,
  Year,
  SubHeaderContainer,
  SubHeader,
  SubHeaderTitle,
  SubHeaderInformation,
  SubHeaderDate,
  SubHeaderPerson,
  GenreContainer,
  Genre,
  VotesContainer,
  RatesContainer,
  StarIcon,
  ActualRating,
  MaxRating,
  VoteAmount,
  Article,
} from "./styled";
import noPicture from "../PersonTile/noPicture.png";
import noPoster from "../MovieTile/noPoster.png";
import { useState, useEffect } from "react";

export const BigTile = ({
  poster_path,
  title,
  release_date,
  place_of_birth,
  birthday,
  rating,
  votes,
  countries,
  article,
  genres,
  profile_path,
}) => {
  const dateOfRelase = new Date(release_date);
  const dayOfBirth = new Date(birthday);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", setStan);

    return () => {
      window.removeEventListener("resize", setStan);
    }
  }, []);

  const setStan = () => {
    window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true);
  };

  return (
    <MainContainer>
      {poster_path && (
        <Image
          src={poster_path ? `${imageBaseUrl}/w342${poster_path}` : noPoster}
          alt={`poster of ${title}`}
        />
      )}

      {profile_path && (
        <Image
          src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
          alt={`portrait of ${title}`}
        />
      )}

      <TileContainer>
        {title && <BigTileTitle>{title}</BigTileTitle>}

        {release_date && <Year>{(release_date).slice(0, 4)}</Year>}
        <SubHeaderContainer>
          {countries && release_date ? (
            <>
              {countries ? (
                countries.length > 0 ? (
                  <SubHeader>
                    <SubHeaderTitle>Production:</SubHeaderTitle>
                    {countries.map(({ name }) => (
                      <SubHeaderInformation>
                        {name}
                        {","}
                      </SubHeaderInformation>
                    ))}
                  </SubHeader>
                ) : null
              ) : null}
              {release_date ? (
                <SubHeader>
                  <SubHeaderTitle>Release date:</SubHeaderTitle>
                  <SubHeaderInformation>{dateOfRelase.toLocaleDateString('pl-PL')}</SubHeaderInformation>
                </SubHeader>
              ) : null}
            </>
          ) : null}

          {birthday || place_of_birth ? (
            <SubHeaderPerson>
              {birthday && (
                <>
                  <SubHeaderDate>{isMobile ? "Birth:" : "Date of birth:"}</SubHeaderDate>
                  <SubHeaderInformation>{dayOfBirth.toLocaleDateString('pl-PL')}</SubHeaderInformation>
                </>
              )}
              {place_of_birth && (
                <>
                  <SubHeaderDate>Place of birth:</SubHeaderDate>
                  <SubHeaderInformation>{place_of_birth}</SubHeaderInformation>
                </>
              )}
            </SubHeaderPerson>
          ) : null}
        </SubHeaderContainer>

        {genres && (
          <GenreContainer>
            {genres.map(({ name }) => (
              <Genre>{name}</Genre>
            ))}
          </GenreContainer>
        )}

        {rating && votes ? (
          <VotesContainer>
            <RatesContainer>
              <StarIcon />
              <ActualRating>{rating.toFixed(1)}</ActualRating>
              <MaxRating>/ 10</MaxRating>
            </RatesContainer>
            <VoteAmount>{votes} votes</VoteAmount>
          </VotesContainer>
        ) : null}
      </TileContainer>
      <Article>{article}</Article>
    </MainContainer>
  );
};
