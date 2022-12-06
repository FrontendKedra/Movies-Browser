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
  margin: 24px auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;

  @media (max-width: 480px) {
    margin: 12px auto 0;
  }
`;

export const ListTitle = styled.h1`
  margin: 56px 0 0;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    margin: 24px 0 0;
  }
`;
