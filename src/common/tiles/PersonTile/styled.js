import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`;

export const Container = styled.div`
  width: 208px;
  height: 339px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.small};
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const ProfileImage = styled.img`
  width: 177px;
  height: 232.31px;
  display: block;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.small};
  object-position: top;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 0;
`;
