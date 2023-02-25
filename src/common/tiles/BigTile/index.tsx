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
  GenreContainer,
  Genre,
  VotesContainer,
  RatesContainer,
  StarIcon,
  ActualRating,
  MaxRating,
  VoteAmount,
  Article,
  Paragraf,
} from "./styled";
import noPicture from "../PersonTile/noPicture.png";
import noPoster from "../MovieTile/noPoster.png";
import { useState, useEffect } from "react";
import { BigTileProps } from "../../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";


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
}: BigTileProps) => {
  const dateOfRelease = release_date ? new Date(release_date) : undefined;
  const dayOfBirth = birthday ? new Date(birthday) : undefined;
  const [isMobile, setIsMobile] = useState(false);

  const setMobileState = () => {
    window.innerWidth > 480 ? setIsMobile(false) : setIsMobile(true);
  };

  useEffect(() => {
    window.addEventListener("resize", setMobileState);

    return () => {
      window.removeEventListener("resize", setMobileState);
    };
  }, []);

  return (
    <MainContainer>
      {poster_path !== undefined && (
        <Image
          src={poster_path ? `${imageBaseUrl}/w342${poster_path}` : noPoster}
          alt={`poster of ${title}`}
        />
      )}

      {profile_path !== undefined && (
        <Image
          src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
          alt={`portrait of ${title}`}
        />
      )}

      <TileContainer>
        {title && <BigTileTitle>{title}</BigTileTitle>}

        {release_date && <Year>{release_date.slice(0, 4)}</Year>}
        <SubHeaderContainer>
          {countries && release_date ? (
            <>
              {countries ? (
                countries.length > 0 ? (
                  <SubHeader>
                    <SubHeaderTitle>Production:</SubHeaderTitle>
                    {countries.map((country) => (
                      <SubHeaderInformation key={country.name}>
                        {country.name}
                        {countries.indexOf(country) !== countries.length - 1 &&
                          ", "}
                      </SubHeaderInformation>
                    ))}
                  </SubHeader>
                ) : null
              ) : null}
              {release_date ? (
                <SubHeader>
                  <SubHeaderTitle>Release date:</SubHeaderTitle>
                  <SubHeaderInformation>
                    {dateOfRelease?.toLocaleDateString("pl-PL")}
                  </SubHeaderInformation>
                </SubHeader>
              ) : null}
            </>
          ) : null}

          {birthday || place_of_birth ? (
            <div>
              {birthday && (
                <Paragraf>
                  <SubHeaderDate>
                    {isMobile ? "Birth:" : "Date of birth:"}
                  </SubHeaderDate>
                  <SubHeaderInformation>
                    {dayOfBirth?.toLocaleDateString("pl-PL")}
                  </SubHeaderInformation>
                </Paragraf>
              )}
              {place_of_birth && (
                <Paragraf>
                  <SubHeaderDate>Place of birth:</SubHeaderDate>
                  <SubHeaderInformation>{place_of_birth}</SubHeaderInformation>
                </Paragraf>
              )}
            </div>
          ) : null}
        </SubHeaderContainer>

        {genres && (
          <GenreContainer>
            {genres.map(({ name }) => (
              <Genre key={name}>{name}</Genre>
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
