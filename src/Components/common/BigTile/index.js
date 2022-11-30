import {
  Container,
  TileImage,
  TileContainer,
  TileTitle,
  TileYear,
  TileSubHeaderContainer,
  TileSubHeader,
  TileSubHeaderTitle,
  TileSubHeaderInformation,
  TileGenreContainer,
  TileGenre,
  TileVotesContainer,
  TileRatesContainer,
  TileStarIcon,
  TileActualRating,
  TileMaxRating,
  TileVoteAmount,
  TileArticle,
} from "./styled";
import poster from "../../../images/poster.png";

export const BigTile = () => (
  <Container>
    <TileImage src={poster} />
    <TileContainer>
      <TileTitle>Mulan</TileTitle>
      <TileYear>2020</TileYear>
      <TileSubHeaderContainer>
        <TileSubHeader>
          <TileSubHeaderTitle>Production:</TileSubHeaderTitle>
          <TileSubHeaderInformation>
            China, United States of America
          </TileSubHeaderInformation>
        </TileSubHeader>
        <TileSubHeader>
          <TileSubHeaderTitle>Release date:</TileSubHeaderTitle>
          <TileSubHeaderInformation>24.10.2020</TileSubHeaderInformation>
        </TileSubHeader>
      </TileSubHeaderContainer>
      <TileGenreContainer>
        <TileGenre>Action</TileGenre>
        <TileGenre>Drama</TileGenre>
        <TileGenre>Adventure</TileGenre>
      </TileGenreContainer>
      <TileVotesContainer>
        <TileRatesContainer>
          <TileStarIcon />
          <TileActualRating>7,8</TileActualRating>
          <TileMaxRating>/ 10</TileMaxRating>
        </TileRatesContainer>
        <TileVoteAmount>335 votes</TileVoteAmount>
      </TileVotesContainer>
    </TileContainer>
    <TileArticle>
      A young Chinese maiden disguises herself as a male warrior in order to
      save her father. Disguises herself as a male warrior in order to save her
      father. A young Chinese maiden disguises herself as a male warrior in
      order to save her father.
    </TileArticle>
  </Container>
);
