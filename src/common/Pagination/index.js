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

  return (
    <PageChanger>
      <Button disabled={pageNumber === 1} onClick={() => changePage(1)}>
        <ArrowIconPrevious mobile="true" />
        <ArrowIconPrevious />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={pageNumber === 1} onClick={() => changePage(pageNumber - 1)}>
        <ArrowIconPrevious />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page
        <Span>{pageNumber}</Span>
        of
        <Span>{totalPages > 500 ? 500 : totalPages}</Span>
      </PageCounter>
      <Button
        next
        disabled={pageNumber === (totalPages > 500 ? 500 : totalPages)}
        onClick={() => changePage(pageNumber + 1)}
      >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext />
      </Button>
      <Button
        next
        disabled={pageNumber === (totalPages > 500 ? 500 : totalPages)}
        onClick={() => changePage(totalPages > 500 ? 500 : totalPages)}
      >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext mobile="true" />
        <ArrowIconNext />
      </Button>
    </PageChanger>
  );
};
