import { imageBaseUrl } from "../../../ApiValue";
import { Container, ProfileImage, Name, Info } from "./styled";
import noPicture from "./noPicture.png";

export const PersonTile = ({ profile_path, name, big, character }) => {
  return (
    <Container>
      <ProfileImage
        src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
        alt={`portrait of ${name}`}/> 
      <Name>{name}</Name>
      <Info big={big}>{character}</Info>
    </Container>
  );
};
