import { LoaderProps } from "../../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { IconSpinner, Header, Container, Wrapper } from "./styled";

export const Loader = ({ title }: LoaderProps) => (
  <Wrapper>
    <Header>{title}</Header>
    <Container>
      <IconSpinner />
    </Container>
  </Wrapper>
);
