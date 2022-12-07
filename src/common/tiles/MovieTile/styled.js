import styled from "styled-components";
import { Ratings } from "./Ratings";

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

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 324px;
  height: 650px;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: ${({ theme }) => theme.radius.small};
  box-shadow: ${({ theme }) => theme.shadow.mainShadow};

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto 1fr;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 201px;
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const Poster = styled.img`
  width: 292px;
  height: 434px;
  margin: 16px;
  border-radius: ${({ theme }) => theme.radius.small};

  @media (max-width: 767px) {
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-columns: auto 1fr;
  }

  @media (max-width: 480px) {
    margin-right: 0;
    width: 114px;
    height: 169px;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 16px;

  @media (max-width: 767px) {
    margin: 16px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 16px;
    grid-gap: 4px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0 16px;

  @media (max-width: 767px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 0 0 16px;

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 16.9px;
  }
`;

export const StyledRatings = styled(Ratings)`
  margin-bottom: 16px;
  margin-left: 16px;
`;
