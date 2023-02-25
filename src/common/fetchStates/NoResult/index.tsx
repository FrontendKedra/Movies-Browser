import { NoResultProps } from "../../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { Image, Header, Container, Wrapper } from "./styled";

export const NoResult = ({ query }: NoResultProps) => (
  <Wrapper>
    <Header>Sorry, there are no results for “{query}”</Header>
    <Container>
      <Image />
    </Container>
  </Wrapper>
);
