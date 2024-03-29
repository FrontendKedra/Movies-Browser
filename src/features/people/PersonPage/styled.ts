import styled from "styled-components";

export const ContentContainer = styled.div`
  gap: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 0 56px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.larger}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0 0 21px 0;
    grid-template-columns: 1fr;
  }
`;

export const Header = styled.h2`
  margin: 8px 0 32px;
  font-size: 36px;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 20px;
    margin: 5px 0 12px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 16px;
  }
`;
