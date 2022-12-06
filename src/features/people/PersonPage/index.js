import { BigTile } from "../../../common/tiles/BigTile";
import { MovieTile } from "../../../common/tiles/MovieTile";
import { ContentContainer, Header, Wrapper } from "./styled";

export const PersonPage = () => {
  return (
    <div>
      <Wrapper>
        <BigTile />
        <Header>Movies - cast (liczba)</Header>
        <ContentContainer>
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
        </ContentContainer>
        <Header>Movies - crew (liczba)</Header>
        <ContentContainer>
          <MovieTile />
          <MovieTile />
          <MovieTile />
          <MovieTile />
        </ContentContainer>
      </Wrapper>
    </div>
  );
};
