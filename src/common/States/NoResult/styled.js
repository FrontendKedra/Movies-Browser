import styled from "styled-components";
import { ReactComponent as Icon } from "./icons/NoResult.svg";

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

export const Header = styled.header`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin-top: 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    font-size: 26px;
    margin: 48px 0 0 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 20px;
    line-height: 130%;
    margin: 36px 0 0 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-weight: 500;
    font-size: 14px;
    margin: 24px 0 0 16px;
  }
`;

export const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    margin-top: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 24px;
  }
`;

export const Image = styled(Icon)`
  width: 668px;
  height: 509px;

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    width: 500px;
    height: 380px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 334px;
    height: 254px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 257px;
    height: 196px;
  }
`;
