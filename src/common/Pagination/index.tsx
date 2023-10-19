import {
  ArrowIconPrevious,
  ArrowIconNext,
  Button,
  ButtonText,
  PageChanger,
  PageCounter,
  Span,
} from "./styled";
import { usePageNumber } from "../../hooks/usePageNumber";
import {
  PaginationProps,
  UsePageNumber,
} from "../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";

export const Pagination = ({ totalPages }: PaginationProps) => {
  const [pageNumber, changePage]: UsePageNumber = usePageNumber();
  const isFirstPage = pageNumber === 1;

  return (
    <PageChanger>
      <Button disabled={isFirstPage} onClick={() => changePage(1)}>
        <ArrowIconPrevious mobile="true" />
        <ArrowIconPrevious />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={isFirstPage} onClick={() => changePage(pageNumber - 1)}>
        <ArrowIconPrevious />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page
        <Span>{pageNumber}</Span>
        of
        <Span>{totalPages}</Span>
      </PageCounter>
      <Button
        next
        disabled={pageNumber === totalPages}
        onClick={() => changePage(pageNumber + 1)}
      >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button
        next
        disabled={pageNumber === totalPages}
        onClick={() => changePage(totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext mobile="true" />
        <ArrowIconNext />
      </Button>
    </PageChanger>
  );
};
