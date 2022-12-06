import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  @media (max-width: 1380px) {
    padding: 16px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 0 0 56px 0;

  @media (max-width: 992px) {
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin: 0 0 21px 0;
  }
`;

export const Header = styled.h2`
  margin: 8px 0 32px;
  font-size: 36px;
  font-weight: 600;

  @media (max-width: 480px) {
    margin: 5px 0 12px;
  }
`;
