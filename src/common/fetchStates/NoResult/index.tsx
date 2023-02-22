import { Image, Header, Container, Wrapper } from "./styled";

interface NoResult {
  query: string | null;
}

export const NoResult = ({ query }: NoResult) => (
  <Wrapper>
    <Header>Sorry, there are no results for “{query}”</Header>
    <Container>
      <Image />
    </Container>
  </Wrapper>
);
