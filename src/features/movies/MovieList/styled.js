import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

export const ContentContainer = styled.div`
  margin: 24px auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 12px auto 0;
  }
`;

export const ListTitle = styled.h1`
  margin: 56px 0 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
    margin: 24px 0 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`;

export const PageChanger = styled.div`
  display: flex;
  margin: 40px 0 103px;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 1.4;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  margin-right: 12px;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.grey};
      cursor: not-allowed;
    `}
`;

export const PageCounter = styled.div`
  margin-left: 12px;
  margin-right: 24px;
  padding: 8px 16px;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
