import { Image, Header, Container, Wrapper } from "./styled";

export const NoResult = ({ query }) => (
  <Wrapper>
    <Header>Sorry, there are no results for “{query}”</Header>
    <Container>
      <Image />
    </Container>
  </Wrapper>
);
