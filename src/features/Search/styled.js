import styled from "styled-components";

export const SearchContainer = styled.form`
  margin-top: 40px;
`;

export const SearchInput = styled.input`
  width: 432px;
  border-radius: ${({ theme }) => theme.radius.navigationInput};
  border: none;
  padding: 14px 12px 14px 45px;
  font-weight: 400;

  ::placeholder {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    padding: 12px 12px 12px 38px;
  }
`;
