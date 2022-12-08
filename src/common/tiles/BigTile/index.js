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

export const BigTile = ({
  id,
  poster_path,
  title,
  release_date,
  rating,
  votes,
  countries,
  article,
}) => {
  return (
    <MainContainer key={id} id={id}>
      <Image src={`${imageBaseUrl}/w342${poster_path}`} />
      <TileContainer>
        <BigTileTitle>{title}</BigTileTitle>
        <Year>{release_date}</Year>
        <SubHeaderContainer>
          <SubHeader>
            {countries.length > 0 ? (
              <SubHeaderTitle>Production:</SubHeaderTitle>
            ) : null}
            {countries.map(({ name }) => (
              <>
                <SubHeaderInformation>
                  {name}
                  {","}
                </SubHeaderInformation>
              </>
            ))}
          </SubHeader>
          <SubHeader>
            <SubHeaderTitle>Release date:</SubHeaderTitle>
            <SubHeaderInformation>{release_date}</SubHeaderInformation>
          </SubHeader>
        </SubHeaderContainer>
        <GenreContainer>
          <Genre>Action</Genre>
          <Genre>Drama</Genre>
          <Genre>Adventure</Genre>
        </GenreContainer>
        <VotesContainer>
          <RatesContainer>
            <StarIcon />
            <ActualRating>{rating}</ActualRating>
            <MaxRating>/ 10</MaxRating>
          </RatesContainer>
          <VoteAmount>{votes} votes</VoteAmount>
        </VotesContainer>
      </TileContainer>
      <Article>{article}</Article>
    </MainContainer>
  );
};
