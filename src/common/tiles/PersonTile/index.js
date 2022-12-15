import { imageBaseUrl } from "../../../ApiValue";
import { Character, Container, Name, ProfileImage } from "./styled";
import noPicture from "./noPicture.png";
import { PeopleStyledLink } from "../generisStyles/styled";

export const PersonTile = ({ id, profile_path, name, character }) => {
  return (
    <PeopleStyledLink to={`/profile/${id}`} key={id}>
      <Container>
        <ProfileImage
          src={profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture}
          alt={`portrait of ${name}`}
        ></ProfileImage>
        {name && <Name>{name}</Name>}
        {character && <Character>{character}</Character>}
      </Container>
    </PeopleStyledLink>
  );
};
