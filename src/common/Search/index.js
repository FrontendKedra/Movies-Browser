import { SearchInput } from "./styled";
import useQueryParameter from "../../features/useQueryParameter";
import { useReplaceQueryParameter } from "../../features/useReplaceQueryParameter";

export const Search = () => {
  const query = useQueryParameter("search");
  const replaceQueryParam = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParam({
      key: "search",
      value: target.value,
    });
  };

  return (
    <SearchInput
      placeholder="search for movies"
      value={query || ""}
      onChange={onInputChange}
    />
  );
};
