import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../common/states/Loader";
import { Error } from "../../../common/states/Error";
import { PersonTile } from "../../../common/tiles/PersonTile";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectPopularPeopleStatus,
} from "../popularPeopleSlice";
import { Wrapper, PersonContainer, ListTitle } from "./styled";

export const PeoplePage = () => {
  const dispatch = useDispatch();

  const people = useSelector(selectPopularPeople);
  const stateOfLoading = useSelector(selectPopularPeopleStatus);
  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loader title="Loading popular people..." />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Wrapper>
          <ListTitle>Popular people</ListTitle>
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
      )}
    </>
  );
};
