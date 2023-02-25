import styled, { css, keyframes } from "styled-components";
import { ReactComponent as arrow } from "./images/previousArrow.svg";
import { ReactComponent as arrowNext } from "./images/nextArrow.svg";
import { Next } from "../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";

const move = keyframes`
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const PageChanger = styled.div`
  margin: 40px 0px 87px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 32px 0px 87px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 32px 0px 15px 0px;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  margin: 0px 12px 0px 0px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 8px 12px;
    margin: 0px 8px 0px 0px;
    gap: 0;
  }

  ${({ next }: Next) =>
    next &&
    css`
      margin: 0px 0px 0px 12px;

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin: 0px 0px 0px 8px;
      }
    `}

  &:active {
    background: #ccdbf7;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
    pointer-events: none;
  }
`;

export const ButtonText = styled.span`
  line-height: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    display: none;
  }
`;

export const ArrowIconPrevious = styled(arrow)`
  color: ${({ theme }) => theme.colors.blue};
  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${Button}:hover & {
      animation: ${move} 1s linear infinite;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0px;
    width: 5px;
    height: 8px;
  }

  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: block;
        margin-right: 4px;
      }
    `}
`;

export const ArrowIconNext = styled(arrowNext)`
  color: ${({ theme }) => theme.colors.blue};
  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ${Button}:hover & {
      animation: ${move} 1s linear infinite;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0px;
    width: 5px;
    height: 8px;
  }
  ${({ mobile }) =>
    mobile &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: block;
        margin-right: 4px;
      }
    `}
`;

export const PageCounter = styled.div`
  font-size: 16px;
  padding: 8px 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 12px;
    padding: 8px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 10px;
  }
`;

export const Span = styled.span`
  font-weight: 600;
  margin: 0px 8px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin: 0px 2px;
  }
`;
