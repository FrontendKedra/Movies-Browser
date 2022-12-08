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

export const ContentContainer = styled.div`
  display: flex;
  gap: 64px;
  flex-direction: column;
`;

export const Character = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.darkGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
    line-height: 140%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const Header = styled.header`
  max-width: 1368px;
  margin: 64px auto 32px auto;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 20px;
  }
`;
