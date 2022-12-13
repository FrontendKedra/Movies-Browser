import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchSearch } from "./searchSlice";
import { SearchContainer } from "./styled";

export const Search = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete("query");
    } else {
      searchParams.set("query", target.value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
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
