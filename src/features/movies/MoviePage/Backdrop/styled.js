import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.darkBlack};
  margin-bottom: 64px;
  margin-top: 0px;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1380px;
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
`;

export const Title = styled.h3`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 0px;
`;

export const RatingContainer = styled.div`
`;

export const Rating = styled.div`
  margin-bottom: 18px;
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(Star)`
  height: 40px;
  width: 40px;
  margin-right: 8px;
`;

export const Rate = styled.p`
  line-height: 1.3;
  font-size: 16px;
  margin: 0px;
`;

export const Vote = styled.span`
  font-weight: 500;
  font-size: 30px;
  margin-right: 7px;
`;

export const Votes = styled.p`
  margin: 0px;
`;
