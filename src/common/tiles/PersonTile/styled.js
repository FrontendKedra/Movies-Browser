import styled from "styled-components";

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

export const Container = styled.div`
  width: 208px;
  height: 339px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadow.mainShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 136px;
    height: 245px;
    padding: 8px;
  }
    &:hover {      
      box-shadow: ${({ theme }) => theme.shadow.hoverShadow};
    }
    &:active {
      box-shadow: ${({ theme }) => theme.shadow.activeShadow};
    }
`;

export const ProfileImage = styled.img`
  width: 177px;
  height: 232.31px;
  display: block;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.small};
  object-position: top;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 120px;
    height: 178px;
  }
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 0;
  line-height: 28.6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 14px;
    line-height: 18.2px;
  }
`;

export const Character = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.darkGrey};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 15px;
    line-height: 140%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    line-height: 130%;
  }
`;
