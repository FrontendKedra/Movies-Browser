import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../common/states/Loader";
import { Error } from "../../../common/states/Error";
import { PersonTile } from "../../../common/tiles/PersonTile";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectPopularPeopleStatus,
  selectPopularPeopleTotalPages,
} from "../popularPeopleSlice";
import { Wrapper, PersonContainer, ListTitle } from "./styled";
import { Pagination } from "../../../common/Pagination";

export const PeoplePage = () => {
  const dispatch = useDispatch();

  const people = useSelector(selectPopularPeople);
  const stateOfLoading = useSelector(selectPopularPeopleStatus);

  const [page, setPage] = useState(1);
  const totalPages = useSelector(selectPopularPeopleTotalPages);

  useEffect(() => {
    dispatch(fetchPopularPeople(page));
  }, [dispatch, page]);

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
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </Wrapper>
      )}
    </>
  );
};
