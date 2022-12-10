import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 770px;
  background-color: ${({ theme }) => theme.colors.darkBlack};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-bottom: 0;
  }
`;

export const BackdropContainer = styled.div`
  width: 1368px;
  margin: 0 auto;
`;

export const StyledBackdrop = styled.img`
  width: 100%;
  height: 769px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: flex-end;
  background-position: center;
  background-size: 140%;
  position: absolute;
`;

export const Title = styled.p`
  font-size: 64px;
  font-weight: 600;
  line-height: 76.8px;
`;

export const RatingContainer = styled.div`
  display: flex;
`;

export const StarIcon = styled(Star)`
  height: auto;
  width: 40px;
`;

export const Rates = styled.span`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  margin-bottom: 16px;
`;

export const MaxRates = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  align-items: center;
`;

export const Votes = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
`;
