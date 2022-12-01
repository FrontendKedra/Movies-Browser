import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageBaseUrl } from "../../../ApiValue";
import {
  fetchPopularPeople,
  selectPopularPeople,
} from "../../../popularPeopleSlice";
import { Container, Name, ProfileImage, Wrapper } from "./styled";
import noPicture from "./noPicture.png";

export const PersonTile = () => {
  const dispatch = useDispatch();

  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      {people.map(({ profile_path, id, name }) => (
        <Container key={id} id={id}>
          <ProfileImage
            src={
              profile_path ? `${imageBaseUrl}/w342${profile_path}` : noPicture
            }
            alt=""
          ></ProfileImage>
          <Name>{name}</Name>
        </Container>
      ))}

      {/* Przykładowa ikonka bez fotki  */}
      <Container>
        <ProfileImage src={noPicture} alt=""></ProfileImage>
        <Name>Jakieś długie imię</Name>
      </Container>
    </Wrapper>
  );
};
