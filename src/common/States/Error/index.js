import {
  Container,
  DangerIcon,
  ErrorMessage,
  Header,
  LinkButton,
} from "./styled";

export const Error = () => (
  <Container>
    <DangerIcon />
    <Header>Ooops! Something went wrong... </Header>
    <ErrorMessage>
      Please check your network connection
      <br /> and try again
    </ErrorMessage>
    <LinkButton as="a" href="">
      Back to home page
    </LinkButton>
  </Container>
);
