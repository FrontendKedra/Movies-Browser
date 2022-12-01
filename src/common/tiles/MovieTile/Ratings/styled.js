import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  margin-left: 16px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Rate = styled.span`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 12px;
  font-weight: 600;
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 12px;
  font-weight: 400;
`;

export const StyledStar = styled(Star)`
  @media (max-width: 480px) {
    width: 16px;
    height: 15.25px;
  }
`;
