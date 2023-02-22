import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../common/fetchStates/Loader";
import { Error } from "../../../common/fetchStates/Error";
import { PersonTile } from "../../../common/tiles/PersonTile";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectPopularPeopleStatus,
  selectPopularPeopleToatalResults,
  selectPopularPeopleTotalPages,
} from "../popularPeopleSlice";
import { PersonContainer, ListTitle } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { NoResult } from "../../../common/fetchStates/NoResult";
import { Wrapper } from "../../../common/tiles/generisStyles/styled";
import useQueryParameter from "../../../useQueryParameter";

export const PeoplePage = () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPopularPeople);
  const stateOfLoading = useSelector(selectPopularPeopleStatus);
  const page = useQueryParameter("page");
  const totalPages = useSelector(selectPopularPeopleTotalPages);
  const totalResults = useSelector(selectPopularPeopleToatalResults);
  const query = useQueryParameter("search");

  useEffect(() => {
    dispatch(fetchPopularPeople({ page, query }));
  }, [dispatch, page, query]);

  return (
    <>
      {stateOfLoading === "loading" ? (
        <Loader title="Loading..." />
      ) : stateOfLoading === "error" ? (
        <Error />
      ) : (
        <Wrapper>
          {!people.length ? (
            <NoResult query={query} />
          ) : (
            <>
              <ListTitle>
                {query
                  ? `Search results for "${query}" (${totalResults})`
                  : `Popular people`}
              </ListTitle>
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
              <Pagination totalPages={totalPages} />
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};
