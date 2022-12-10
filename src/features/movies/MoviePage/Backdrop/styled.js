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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    display: flex;
    align-items: center;
  }
`;

export const Rating = styled.div`
  margin-bottom: 18px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0px 8px 0px 0px;
  }
`;

export const StarIcon = styled(Star)`
  width: clamp(16px, 3vw, 40px);
  height: clamp(16px, 3vw, 40px);
  margin-right:clamp(4px, 1vw, 8px);
`;

export const Rate = styled.p`
  font-size: clamp(10px, 1vw, 16px);
  margin: 0px;
`;

export const Vote = styled.span`
  font-weight: 500;
  font-size: clamp(14px, 2vw, 30px);
  margin-right: clamp(2px, 1vw, 7px);
`;

export const Votes = styled.p`
  margin: 0px;
  font-size: clamp(10px, 1vw, 16px);

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    align-self: flex-end;
  }
`;
