import { useHistory, useLocation } from "react-router-dom";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  interface HookProps<ItemType> {
    key: string;
    value: ItemType;
  }

  return <ItemType>({ key, value }: HookProps<ItemType>) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("page");

    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value.toString());
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
