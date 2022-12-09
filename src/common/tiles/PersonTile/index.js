import { imageBaseUrl } from "../../../ApiValue";
import { Container, Name, ProfileImage } from "./styled";
import noPicture from "./noPicture.png";

export const PersonTile = ({ id, profile_path, name }) => {
  return (
    <Container key={id} id={id}>
      <ProfileImage
        src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
        alt=""
      ></ProfileImage>
      <Name>{name}</Name>
    </Container>
  );
};
