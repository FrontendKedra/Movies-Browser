import styled from "styled-components";
import { ReactComponent as Icon } from "./Icons/icon-spinner.svg";

export const LoadingText = styled.header`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  margin: 56px 0 0 276px;

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

export const IconContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      margin-top: 100px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      margin-top: 60px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      margin-top: 24px;
    }
`;

export const IconSpinner = styled(Icon)`
  width: 91px;
  height: 91px;
  animation: spinner 1.5s infinite linear;

    @keyframes spinner {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
      width: 75px;
      height: 75px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      width: 55px;
      height: 55px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      width: 35px;
      height: 35px;
    }
`;
