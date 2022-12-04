import { imageBaseUrl } from "../../../ApiValue";
import { Container, Name, ProfileImage } from "./styled";
import noPicture from "./noPicture.png";
import { Poster } from "../MovieTile/styled";

export const PersonTile = ({ id, profile_path, name }) => {
  return (
    <Container key={id} id={id}>
      <ProfileImage
        src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
        alt=""
      ></ProfileImage>
      <Name>{name}</Name>
    </Container>

    ///treść do tworzenia szkieletu siatki graficznej///

    // <Container>
    //   <ProfileImage src={noPicture}></ProfileImage>
    //   <Name>Megg Creative</Name>
    // </Container>
  );
};
