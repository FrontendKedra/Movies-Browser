import { useLocation } from "react-router-dom";

const useQueryParameter = (paramName) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(paramName);

  return query;
};

export default useQueryParameter;
