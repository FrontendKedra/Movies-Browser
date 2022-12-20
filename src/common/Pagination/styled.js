import styled from "styled-components";
import { ReactComponent as arrow } from "./images/previousArrow.svg";
import { ReactComponent as arrowNext } from "./images/nextArrow.svg";

export const PageChanger = styled.div`
  margin: 40px 0px 87px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  margin-right: 12px;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;

  &:disabled{
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
    pointer-events: none;
  }
`;

export const ButtonText = styled.span`
  line-height: 16px;
`;

export const ArrowIcon = styled(arrow)`
  color: ${({ theme }) => theme.colors.blue};

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const ArrowIconNext = styled(arrowNext)`
  color: ${({ theme }) => theme.colors.blue};
  
  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const PageCounter = styled.div`
  padding: 8px 8px 8px 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const Span = styled.span`
  font-weight: 600;
  margin: 0px 8px;
  color: ${({ theme }) => theme.colors.black};

`;
