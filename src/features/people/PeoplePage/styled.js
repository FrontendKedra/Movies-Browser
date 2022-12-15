import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 16px;
  }
`;

export const PersonContainer = styled.div`
  margin: 0 0 56px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  grid-gap: 24px;

  @media (max-width: 1280px /* ${({ theme }) => theme.breakpoints.extraLarge} */) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 992px /* ${({ theme }) => theme.breakpoints.larger} */) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 767px /* ${({ theme }) => theme.breakpoints.medium} */) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }
  @media (max-width: 480px /* ${({ theme }) => theme.breakpoints.small} */) {
    margin: 0 0 21px 0;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ListTitle = styled.h1`
  margin: 56px 0px 34px 0px; 
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 980px /* ${({ theme }) => theme.breakpoints.mobileMax} */) {
    font-size: 24px;
    margin: 40px 0px 27px 0px;
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
    margin: 24px 0px 20px 0px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
