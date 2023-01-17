import { useHistory, useLocation } from "react-router-dom";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("page");

    if (value === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
