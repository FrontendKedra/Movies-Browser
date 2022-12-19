import { Button, PageChanger, PageCounter, Text } from "./styled";
import { ReactComponent as Previous } from "./previousArrow.svg";
import { ReactComponent as Next } from "./nextArrow.svg";

export const Pagination = ({ page, setPage, totalPages }) => (
  <PageChanger>
    <Button disabled={page === 1} onClick={() => setPage(1)}>
      <Previous /> First
    </Button>
    <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
      <Previous /> Previous
    </Button>
    <PageCounter>
      <Text>Page</Text> {page} <Text>of</Text>
      {(totalPages > 500 ? 500 : totalPages)}
    </PageCounter>
    <Button
      disabled={page === (totalPages > 500 ? 500 : totalPages)}
      onClick={() => setPage(page + 1)}
      forward
    >
      Next
      <Next />
    </Button>
    <Button
      disabled={page === (totalPages > 500 ? 500 : totalPages)}
      onClick={() => setPage(totalPages > 500 ? 500 : totalPages)}
      forward
    >
      Last
      <Next />
    </Button>
  </PageChanger>
);
