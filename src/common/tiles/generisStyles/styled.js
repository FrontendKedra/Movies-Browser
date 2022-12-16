import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieStyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
    &:hover {
        transform: scale(1.03);
    }
    &:active {
        transform: scale(1.05);
    }
`;

export const PeopleStyledLink = styled(Link)`
  text-decoration: none;
    &:hover {
        transform: scale(1.03);
    }
    &:active {
        transform: scale(1.05);
    }
`;
