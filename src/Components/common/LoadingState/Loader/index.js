import { IconSpinner, Header, Container } from "./styled";

export const Loading = () => (
  <>
    <Header>Search results for “Mulan”</Header>
    <Container>
      <IconSpinner />
    </Container>
  </>
);