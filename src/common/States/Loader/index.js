import { IconSpinner, Header, Container, Wrapper } from "./styled";

export const Loader = ({ title }) => (
  <Wrapper>
    <Header>{title}</Header>
    <Container>
      <IconSpinner />
    </Container>
  </Wrapper>
);
