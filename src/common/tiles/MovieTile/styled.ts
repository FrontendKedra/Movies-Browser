import styled from "styled-components";
import { Ratings } from "./Ratings";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: ${({ theme }) => theme.radius.small};
  box-shadow: ${({ theme }) => theme.shadow.mainShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: auto 1fr;
  }
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.hoverShadow};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.shadow.activeShadow};
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.small};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: grid;
    grid-template-columns: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding-right: 0px;
    width: 136px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 16px 0;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-gap: 4px;
    margin-bottom: 8px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const StyledRatings = styled(Ratings)`
  margin-bottom: 16px;
  margin-left: 16px;
`;
