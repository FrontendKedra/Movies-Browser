import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieStyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.blue};
        border-radius: 5px;
    }
    &:active {
        border: 2px solid ${({ theme }) => theme.colors.lightBlue};
        border-radius: 5px;
        transition: 0.3s;
    }
`;

export const PeopleStyledLink = styled(Link)`
  text-decoration: none;
    &:hover {
        border: 1px solid ${({ theme }) => theme.colors.blue};
        border-radius: 5px;
        }
    &:active {
        border: 2px solid ${({ theme }) => theme.colors.lightBlue};
        border-radius: 5px;
        transition: 0.3s;
    }
`;
