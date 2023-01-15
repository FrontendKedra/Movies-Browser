import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieStyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  transition: 0.3s;

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
  transition: 0.3s;
  
    &:hover {
        transform: scale(1.03);
    }
    &:active {
        transform: scale(1.05);
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