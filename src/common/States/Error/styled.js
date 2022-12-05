import styled from "styled-components";
import { ReactComponent as Danger } from "./icons/Danger.svg";

export const Container = styled.div`
  display: grid;
  gap: 24px;
  justify-items: center;
  margin: 195px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      gap: 20px;
      margin: 175px 0 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      gap: 16px;
      margin: 140px 0 0 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      gap: 8px;
      margin: 117px 0 0 0;
    }
`;

export const DangerIcon = styled(Danger)`
  width: 120px;
  height: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      width: 85px;
      height: 85px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 60px;
      height: 60px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      width: 46px;
      height: 46px;
    }
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      font-weight: 600;
      font-size: 26px;
      line-height: 120%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      font-weight: 500;
      font-size: 20px;
      line-height: 130%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-weight: 500;
      font-size: 14px;
      line-height: 130%;
    }
`;

export const ErrorMessage = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      font-size: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      font-size: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 12px;
    }
`;

export const LinkButton = styled.button`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  text-decoration: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      font-size: 13px;
      padding: 14px 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      font-size: 12px;
      padding: 12px 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 10px;
      padding: 8px 12px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.blueRibbon};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.lighterBlue};
    }
`;
