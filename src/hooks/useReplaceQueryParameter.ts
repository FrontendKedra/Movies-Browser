import { useHistory, useLocation } from "react-router-dom";
import { useRef } from "react";

interface SetInputValue {
  (value: string | null): void;
}

interface HookProps {
  key: string;
  value: string | null;
}

export const useReplaceQueryParameter = (setInputValue: SetInputValue) => {
  const location = useLocation();
  const history = useHistory();
  const timeoutRef = useRef<number | undefined>(undefined);

  return ({ key, value }: HookProps) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("page");
    clearTimeout(timeoutRef.current);
    setInputValue(value);

    timeoutRef.current = window.setTimeout(() => {
      if (!value) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, value.toString());
      }
      history.push(`${location.pathname}?${searchParams.toString()}`);
    }, 500);
  };
};
