import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 16px;
  word-break: break-word;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  box-shadow: ${({ theme }) => theme.shadow.mainShadow};
  display: flex;
  flex-direction: column;
  
  @media (max-width:${({ theme }) => theme.breakpoints.large}) {
    padding: 8px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.small};
  aspect-ratio: 2/3;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500px;
  margin: 12px 0px 0px 0px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.black};
  flex: 1 1 auto;
	text-align: center;
	
  @media (max-width:${({ theme }) => theme.breakpoints.large}) {
    font-size: 16px;
    margin: 8px 0px 0px 0px;
  }

  @media (max-width:${({ theme }) => theme.breakpoints.small}) {
		font-size: 14px;
  }
`;

export const Info = styled.p`
  font-weight: 400;
  display: none;

  ${({ big }) => big && css`
    font-size: 18px;
    font-weight: 400;
		line-height: 1.3;
		color: ${({ theme }) => theme.colors.darkGrey};
		margin: 8px 0px 0px 0px;	
    display: block;
		flex: 1 1 auto;
		text-align: center;
  `}

  @media (max-width:${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
    margin: 5px 0 0 0;
  }
`;
