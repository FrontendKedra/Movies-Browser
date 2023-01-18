import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const usePageNumber = () => {
  const history = useHistory();
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const currentPage = +new URLSearchParams(location.search).get("page");
    if (currentPage) {
      setPageNumber(currentPage);
    }
  }, [location]);

  const changePage = (newPage) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", newPage);

    history.push(`${location.pathname}?${queryParams.toString()}`);

    setPageNumber(newPage);
  };

  return [pageNumber, changePage];
};
