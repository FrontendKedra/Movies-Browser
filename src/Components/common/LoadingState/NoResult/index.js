import { NoResultImage, Text, ImageContainer } from "./styled";

export const NoResult = () => (
  <>
    <Text>Sorry, there are no results for “Muan”</Text>
    <ImageContainer>
      <NoResultImage />
    </ImageContainer>
  </>
);