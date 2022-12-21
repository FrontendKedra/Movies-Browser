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
        transition: 0.3s;
    }
    &:active {
        transform: scale(1.05);
        transition: 0.3s;
    }
`;

export const PeopleStyledLink = styled(Link)`
  text-decoration: none;
    &:hover {
        transform: scale(1.03);
        transition: 0.3s;
    }
    &:active {
        transform: scale(1.05);
        transition: 0.3s;
    }
`;

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 0 16px 16px 16px;
  }
`;