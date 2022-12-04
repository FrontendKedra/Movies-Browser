import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
