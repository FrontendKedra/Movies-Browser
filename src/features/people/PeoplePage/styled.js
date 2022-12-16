import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 1368px;
  padding: 16px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const PersonContainer = styled.div`
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

export const ListTitle = styled.h1`
  margin: 40px 0px 34px 0px; 
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width:${({ theme }) => theme.breakpoints.large}) {
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
