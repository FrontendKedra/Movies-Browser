import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBlack};
  margin-bottom: clamp(16px, 5vw, 64px);
  margin-top: 0px;
`;

export const Container = styled.div`
  position: relative;
  max-width:${({ theme }) => theme.breakpoints.largest};
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`;

export const BlureFrames = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 1em 1em 20px 6px black, inset -1em -1em 20px 6px black;
`;

export const BackdropImg = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  padding-left: 16px;
  margin-bottom: clamp(10px, 3vw, 56px); 
  display: flex;
  flex-direction: column;
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h3`
  font-size: clamp(24px, 5vw, 64px);
  font-weight: 600;
  margin-bottom: clamp(8px, 2vw, 25px);
  margin-top: 0px;
`;

export const RatingContainer = styled.div`
  margin-bottom: 18px;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 17px 8px;
  align-items: end;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0px 8px 0px 0px;
    grid-column-gap: 5px;
  }
`;

export const StarIcon = styled(Star)`
  width: clamp(16px, 3vw, 40px);
  height: clamp(16px, 3vw, 40px);
`;

export const Vote = styled.span`
  font-weight: 500;
  font-size: clamp(14px, 3vw, 30px);
  line-height: 1;
  margin-right: 3px;
`;

export const Rate = styled.span`
  font-size: clamp(10px, 2vw, 16px);
`;

export const Votes = styled(Rate)`
  margin-left: 0;
  grid-row: 2;
  grid-column: 1 / 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-left: 3px;
    grid-row: 1;
    grid-column: 4;
  }
`;
