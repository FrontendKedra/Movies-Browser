import styled from "styled-components";
import { ReactComponent as Vector } from "./images/vector.svg";

export const MainContainer = styled.div`
  max-width: 1368px;
  margin: 56px 0;
  padding: 40px;
  display: grid;
  gap: 0 40px;
  grid-template-columns: minmax(auto, 312px) 1fr;
  box-shadow: ${({ theme }) => theme.shadow.mainShadow};
  background-color: ${({ theme }) => theme.colors.white};
  grid-template-rows: auto 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 0 28px;
    grid-template-columns: minmax(auto, 215px) 1fr;
    padding: 28px;
    margin: 36px auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: minmax(auto, 114px) 1fr;
    gap: 0 16px;
    padding: 16px;
    margin: 16px auto;
  }
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  border-radius: ${({ theme }) => theme.radius.small};
  grid-row: span 2;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 215px;
    height: 319px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 114px;
    height: 169px;
  }
`;

export const TileContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-row: span 2;
  }
`;

export const BigTileTitle = styled.header`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 24px;
    margin: 0 0 18px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    margin: 0 0 8px 0;
  }
`;

export const Year = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 18px;
    margin: 0 0 18px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 13px;
    margin: 0 0 8px 0;
  }
`;

export const SubHeaderContainer = styled.div`
  display: grid;
  gap: 8px;
  margin: 0 0 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0 0 18px 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0 0 8px 0;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SubHeaderTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const SubHeaderInformation = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 120%;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }
`;

export const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin: 0 0 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0 0 18px 0;
    gap: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 0 0 8px 0;
    gap: 8px;
  }
`;

export const Genre = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  align-items: center;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
    padding: 6px 9px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const VotesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 12px;
  align-items: center;
  margin: 0 0 24px 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    gap: 8px;
  }
`;

export const RatesContainer = styled.div`
  gap: 8px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const StarIcon = styled(Vector)`
  height: auto;
  width: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 16px;
  }
`;

export const ActualRating = styled.span`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-weight: 600;
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }
`;

export const MaxRating = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    display: none;
  }
`;

export const VoteAmount = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const Article = styled.article`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 17px;
    grid-row: 3;
    grid-column: span 2;
    margin-top: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
    margin-top: 4px;
  }
`;