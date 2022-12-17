import styled, { css } from "styled-components";

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
