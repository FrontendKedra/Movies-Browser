import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ListTitle = styled.h1`
  max-width: 1368px;
  margin: 56px auto 0 auto;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`