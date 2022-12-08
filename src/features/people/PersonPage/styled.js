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
