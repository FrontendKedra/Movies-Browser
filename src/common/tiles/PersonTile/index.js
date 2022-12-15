import { imageBaseUrl } from "../../../ApiValue";
import { Container, ProfileImage, Name, Info } from "./styled";
import noPicture from "./noPicture.png";

export const PersonTile = ({/*  id, */ profile_path, name, large, character }) => {
  return (
    <Container /* key={id} id={id} */>
      <ProfileImage
        src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
        alt={`portrait of ${name}`}/> 
      <Name>{name}</Name>
      <Info big={large}>{character}</Info>
    </Container>
  );
};
