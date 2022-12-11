import { IconSpinner, Header, Container } from "./styled";

export const Loader = ({ title }) => (
  <>
    <Header>{title}</Header>
    <Container>
      <IconSpinner />
    </Container>
  </>
);
