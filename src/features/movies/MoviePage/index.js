import { BigTile } from "../../../common/tiles/BigTile";
import { PersonTile } from "../../../common/tiles/PersonTile";
import { Backdrop } from "./Backdrop";
import { ContentContainer, PersonContainer, Title, Wrapper } from "./styled";

export const MoviePage = () => {
  return (
    <div>
      <Backdrop />
      <ContentContainer>
        <BigTile />
      </ContentContainer>
    </div>
  );
};
