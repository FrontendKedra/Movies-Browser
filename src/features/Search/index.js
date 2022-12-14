import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchSearch } from "./searchSlice";
import { SearchContainer } from "./styled";
import useQueryParameter from "./useQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

export const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const query = useQueryParameter("search");
  const replaceQueryParam = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParam({
      key: "search",
      value: target.value.trim() !== undefined ? target.value : undefined,
    });
  };

  const onFormChange = (event) => {
    event.preventDefault();

    dispatch(fetchSearch(query));
  };

  return (
    <SearchContainer onChange={onFormChange}>
      <input
        placeholder="search for movies"
        value={query || ""}
        onChange={onInputChange}
      />
    </SearchContainer>
  );
};
