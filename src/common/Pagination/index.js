import {
  ArrowIconPrevious,
  ArrowIconNext,
  Button,
  ButtonText,
  PageChanger,
  PageCounter,
  Span,
} from "./styled";

export const Pagination = ({ page, setPage, totalPages }) => (
  <PageChanger>
    <Button
      disabled={page === 1}
      onClick={() => setPage(1)}
    >
      <ArrowIconPrevious mobile="true" />
      <ArrowIconPrevious />
      <ButtonText>First</ButtonText>
    </Button>
    <Button
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
    >
      <ArrowIconPrevious />
      <ButtonText>Previous</ButtonText>
    </Button>
    <PageCounter>
      Page
      <Span>{page}</Span>
      of
      <Span>{(totalPages > 500 ? 500 : totalPages)}</Span>
    </PageCounter>
    <Button
      next
      disabled={page === (totalPages > 500 ? 500 : totalPages)}
      onClick={() => setPage(page + 1)}
    >
      <ButtonText>Next</ButtonText>
      <ArrowIconNext />
    </Button>
    <Button
      next
      disabled={page === (totalPages > 500 ? 500 : totalPages)}
      onClick={() => setPage(totalPages > 500 ? 500 : totalPages)}
    >
      <ButtonText>Last</ButtonText>
      <ArrowIconNext mobile="true" />
      <ArrowIconNext />
    </Button>
  </PageChanger>
);
