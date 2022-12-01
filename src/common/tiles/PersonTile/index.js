import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageBaseUrl } from "../../../ApiValue";
import {
  fetchPopularPeople,
  selectPopularPeople,
} from "../../../popularPeopleSlice";
// import poster from "./poster.png";
import { Container, Name, ProfileImage, Wrapper } from "./styled";
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
            src={`${imageBaseUrl}/w342${profile_path}`}
            alt=""
          ></ProfileImage>
          <Name>{name}</Name>
        </Container>
      ))}
    </Wrapper>
  );
};
