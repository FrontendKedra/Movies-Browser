import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PersonTile } from "../../../common/tiles/PersonTile";
import { fetchPopularPeople, selectPopularPeople } from "../popularPeopleSlice";
import { ListTitle, PersonContainer, Wrapper } from "./styled";

export const PeoplePage = () => {
  const dispatch = useDispatch();

  const people = useSelector(selectPopularPeople);

  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  return (
    <Wrapper>
      <ListTitle> Popular people</ListTitle>
      <PersonContainer>
        {people.map(({ profile_path, id, name }) => (
          <PersonTile
            key={id}
            id={id}
            profile_path={profile_path}
            name={name}
          />
        ))}
      </PersonContainer>
    </Wrapper>
  );
};
