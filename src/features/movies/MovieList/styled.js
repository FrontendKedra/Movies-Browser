import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 0 16px 16px 16px;
  }
`;

export const ContentContainer = styled.div`
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
    margin: 12px auto 0;
  }
`;

export const ListTitle = styled.h1`
  margin: 56px 0 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
    margin: 24px 0 0;
  }
`;
