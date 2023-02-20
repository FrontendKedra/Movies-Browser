import { useLocation } from "react-router-dom";

const useQueryParameter = (paramName: string) => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(paramName);
};

export default useQueryParameter;
