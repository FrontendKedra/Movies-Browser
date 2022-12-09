import { BigTile } from "../../../common/tiles/BigTile";
import { PersonTile } from "../../../common/tiles/PersonTile";
import { Backdrop } from "./Backdrop";
import { ContentContainer, Header, Wrapper } from "./styled";

export const MoviePage = () => {
  return (
    <div>
      <Backdrop />
      <Wrapper>
        <BigTile />
        <Header>Cast</Header>
        <ContentContainer>
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
        </ContentContainer>
        <Header>Crew</Header>
        <ContentContainer>
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
          <PersonTile />
        </ContentContainer>
      </Wrapper>
    </div>
  );
};
