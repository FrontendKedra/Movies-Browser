import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageBaseUrl } from "../../../ApiValue";
import {
  fetchPopularPeople,
  selectPopularPeople,
} from "../../../popularPeopleSlice";
// import poster from "./poster.png";
import { Container, Name, ProfileImage, Wrapper } from "./styled";
import noPicture from "./noPicture.png";
import { ReactComponent as NoImage } from "./noPersonImage.svg";

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
            // src={`${imageBaseUrl}/w342${profile_path}`}
            alt=""
          ></ProfileImage>
          <Name>{name}</Name>
        </Container>
      ))}

      {/* Przykładowa ikonka bez fotki  */}
      <Container>
        <ProfileImage src={noPicture} alt=""></ProfileImage>
        <Name>Dupa blada</Name>
      </Container>
    </Wrapper>
  );
};
