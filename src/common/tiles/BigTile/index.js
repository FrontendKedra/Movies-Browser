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
import poster from "./images/poster.png";

export const BigTile = () => (
  <MainContainer>
    <Image src={poster} />
    <TileContainer>
      <BigTileTitle>Mulan</BigTileTitle>
      <Year>2020</Year>
      <SubHeaderContainer>
        <SubHeader>
          <SubHeaderTitle>Production:</SubHeaderTitle>
          <SubHeaderInformation>
            China, United States of America
          </SubHeaderInformation>
        </SubHeader>
        <SubHeader>
          <SubHeaderTitle>Release date:</SubHeaderTitle>
          <SubHeaderInformation>24.10.2020</SubHeaderInformation>
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
          <ActualRating>7,8</ActualRating>
          <MaxRating>/ 10</MaxRating>
        </RatesContainer>
        <VoteAmount>335 votes</VoteAmount>
      </VotesContainer>
    </TileContainer>
    <Article>
      A young Chinese maiden disguises herself as a male warrior in order to
      save her father. Disguises herself as a male warrior in order to save her
      father. A young Chinese maiden disguises herself as a male warrior in
      order to save her father.
    </Article>
  </MainContainer>
);
