import { imageBaseUrl } from "../../../ApiValue";
import { Container, ProfileImage, Name, Info } from "./styled";
import noPicture from "./noPicture.png";
import { PeopleStyledLink } from "../generisStyles/styled";

export const PersonTile = ({ id,profile_path, name, big, character }) => {
  return (
    <Container>
      <PeopleStyledLink to={`/profile/${id}`} key={id} />
      <ProfileImage
        src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
        alt={`portrait of ${name}`}
      />
      {name && <Name>{name}</Name>}
      {character && <Info big={big}>{character}</Info>}
    </Container>
  );
};
