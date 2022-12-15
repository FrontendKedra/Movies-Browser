import { useDispatch } from "react-redux";
import { fetchSearch } from "./searchSlice";
import { SearchContainer } from "./styled";
import useQueryParameter from "../useQueryParameter";
import { useReplaceQueryParameter } from "../useReplaceQueryParameter";

export const Search = () => {
  const dispatch = useDispatch();

  const query = useQueryParameter("search");
  const replaceQueryParam = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParam({
      key: "search",
      value: target.value.trim(),
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
