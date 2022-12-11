import styled from "styled-components";
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

export const PersonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
  justify-content: center;
`;

export const ListTitle = styled.h1`
  margin: 56px 0 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 18px;
    margin: 24px 0 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
