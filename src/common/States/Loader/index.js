import { IconSpinner, Header, Container } from "./styled";

export const Loader = () => (
  <>
    <Header>Search results for “Mulan”</Header>
    <Container>
      <IconSpinner />
    </Container>
  </>
);