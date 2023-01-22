import {
  ArrowIconPrevious,
  ArrowIconNext,
  Button,
  ButtonText,
  PageChanger,
  PageCounter,
  Span,
} from "./styled";
import { usePageNumber } from "../../usePageNumber";

export const Pagination = ({ totalPages }) => {
  const [pageNumber, changePage] = usePageNumber();

  const isLastPage = totalPages > 500 ? 500 : totalPages;
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
        <Span>{isLastPage}</Span>
      </PageCounter>
      <Button
        next
        disabled={pageNumber === isLastPage}
        onClick={() => changePage(pageNumber + 1)}
      >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button
        next
        disabled={pageNumber === isLastPage}
        onClick={() => changePage(isLastPage)}
      >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext mobile="true" />
        <ArrowIconNext />
      </Button>
    </PageChanger>
  );
};
