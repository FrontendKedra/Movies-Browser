import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.largest};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.largest}) {
    padding: 16px;
  }
`;

export const ContentContainer = styled.div`
  margin: 0px 0px 56px 0px;
  display: grid;
  grid-template-columns: repeat(6, 1fr); 
  grid-gap: 24px;

  @media (max-width:${({ theme }) => theme.breakpoints.largest}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width:${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }
  @media (max-width:${({ theme }) => theme.breakpoints.small}) {
    margin: 0px 0px 21px 0px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Header = styled.h2`
  margin: 8px 0 32px;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    margin: 5px 0 12px;
    font-size: 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

