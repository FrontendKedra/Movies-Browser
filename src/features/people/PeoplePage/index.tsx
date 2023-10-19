import { useEffect } from "react";
import { Loader } from "../../../common/fetchStates/Loader";
import { Error } from "../../../common/fetchStates/Error";
import { PersonTile } from "../../../common/tiles/PersonTile";
import { PersonContainer, ListTitle } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { NoResult } from "../../../common/fetchStates/NoResult";
import { Wrapper } from "../../../common/tiles/generisStyles/styled";
import useQueryParameter from "../../../hooks/useQueryParameter";
import { useQuery, useQueryClient } from "react-query";
import { usePageNumber } from "../../../hooks/usePageNumber";
import { getPeople } from "../../../api/people/getPeople";

export const PeoplePage = () => {
  const [page] = usePageNumber();
  const query = useQueryParameter("search");
  const queryClient = useQueryClient();

  const { isLoading, data, isError } = useQuery(
    ["popularPeople", { page, query }],
    getPeople
  );

  const people = data?.results || [];
  const totalPages = data?.total_pages || 0;
  const totalResults = data?.total_results || 0;
  const limitedTotalPages = totalPages > 500 ? 500 : totalPages;

  useEffect(() => {
    if (page + 1 < limitedTotalPages)
      queryClient.prefetchQuery(
        ["popularPeople", { page: page + 1, query }],
        getPeople
      );
  }, [page, queryClient, query, limitedTotalPages]);

  return (
    <>
      {isLoading ? (
        <Loader title="Loading..." />
      ) : isError ? (
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
              <Pagination totalPages={limitedTotalPages} />
            </>
          )}
        </Wrapper>
      )}
    </>
  );
};
