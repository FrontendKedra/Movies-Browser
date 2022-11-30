import styled from "styled-components";

export const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  margin-left: 16px;

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 11px;
    margin-top: 4px;
  }
`;

export const GenreItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-right: 8px;

  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: ${({ theme }) => theme.radius.small};

  @media (max-width: 480px) {
    padding: 4px 8px;
  }
`;
