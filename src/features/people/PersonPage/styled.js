import styled from "styled-components";

export const SubHeaderDate = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0;
  line-height: 120%;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const SubHeaderPerson = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CastCrewHeader = styled.div`
  max-width: 1368px;
  margin: 64px auto 0 auto;
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

export const ContentContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 0 0 56px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    gap: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0 0 21px 0;
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
