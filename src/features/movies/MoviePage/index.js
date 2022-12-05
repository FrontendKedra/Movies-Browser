import { BigTile } from "../../../common/tiles/BigTile";
import { Backdrop } from "./Backdrop";
import { ContentContainer } from "./styled";

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
