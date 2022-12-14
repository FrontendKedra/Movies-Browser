import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch, setQuery } from "./searchSlice";
import { SearchContainer } from "./styled";
import useQueryParameter from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

export const Search = () => {
  const dispatch = useDispatch();

  const query = useQueryParameter("search");
  const replaceQueryParam = useReplaceQueryParameter();

  console.log(query);

  const onInputChange = ({ target }) => {
    replaceQueryParam({
      key: "search",
      value: target.value.trim() !== undefined ? target.value : undefined,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchSearch(query));
  };

  return (
    <SearchContainer onSubmit={onFormSubmit}>
      <input
        placeholder="search for movies"
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchContainer>
  );
};
