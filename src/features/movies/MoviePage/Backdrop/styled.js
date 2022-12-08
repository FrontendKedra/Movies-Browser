import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBlack};
  margin-bottom: 64px;
  margin-top: 0px;

  @media(max-width:${({ theme }) => theme.breakpoints.largest}){
    margin-bottom: calc(16px + (64 - 16) * ((100vw - 320px) / (1368 - 320)));
  }
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
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  color: ${({ theme }) => theme.colors.white};

  @media(max-width:1920px){
    margin-bottom: calc(9px + (56 - 9) * ((100vw - 320px) / (1368 - 320)));
  }
`;

export const Title = styled.h3`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 0px;

  @media(max-width:${({ theme }) => theme.breakpoints.largest}){
    margin-bottom: calc(2px + (25 - 2) * ((100vw - 320px) / (1368 - 320)));
    font-size: calc(24px + (64 - 24) * ((100vw - 320px) / (1368 - 320)));
  }
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
  height: 40px;
  width: 40px;
  margin-right: 8px;

  @media(max-width:${({ theme }) => theme.breakpoints.largest}){
    width: calc(16px + (40 - 16) * ((100vw - 320px) / (1368 - 320)));
    height: calc(16px + (40 - 16) * ((100vw - 320px) / (1368 - 320)));
    margin-right: calc(4px + (8 - 4) * ((100vw - 320px) / (1368 - 320)));
  }
`;

export const Rate = styled.p`
  line-height: 1.3;
  font-size: 16px;
  margin: 0px;

  @media(max-width:${({ theme }) => theme.breakpoints.largest}){
    font-size: calc(10px + (16 - 10) * ((100vw - 320px) / (1368 - 320)));
  }
`;

export const Vote = styled.span`
  font-weight: 500;
  font-size: 30px;
  margin-right: 7px;
    
  @media(max-width:${({ theme }) => theme.breakpoints.largest}){
    font-size: calc(14px + (30 - 14) * ((100vw - 320px) / (1368 - 320)));
    margin-right: calc(2px + (7 - 2) * ((100vw - 320px) / (1368 - 320)));
  }
`;

export const Votes = styled.p`
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    align-self: flex-end;
    line-height: 1.5;
  }
  @media(max-width:${({ theme }) => theme.breakpoints.largest}){
    font-size: calc(10px + (16 - 10) * ((100vw - 320px) / (1368 - 320)));
  }
`;
