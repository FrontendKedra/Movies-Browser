import { IconSpinner, Header, Container, Wrapper } from "./styled";

interface Loader {
  title: string;
}

export const Loader = ({ title }: Loader) => (
  <Wrapper>
    <Header>{title}</Header>
    <Container>
      <IconSpinner />
    </Container>
  </Wrapper>
);
