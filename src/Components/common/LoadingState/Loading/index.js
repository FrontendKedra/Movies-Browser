import { IconSpinner, LoadingText, IconContainer } from "./styled";

export const Loading = () => (
  <>
    <LoadingText>Search results for “Mulan”</LoadingText>
    <IconContainer>
      <IconSpinner />
    </IconContainer>
  </>
);