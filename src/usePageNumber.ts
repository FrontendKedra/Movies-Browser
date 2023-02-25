import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UsePageNumber } from "./apiInterfaces/generalTypesInterfaces/typesAndInterfaces";

export const usePageNumber = (): UsePageNumber => {
  const history = useHistory();
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const currentPage = new URLSearchParams(location.search).get("page");

    if (currentPage) {
      setPageNumber(parseInt(currentPage));
    }
  }, [location]);

  const changePage = (newPage: number) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("page", newPage.toString());

    history.push(`${location.pathname}?${queryParams.toString()}`);

    setPageNumber(newPage);
  };

  return [pageNumber, changePage];
};
