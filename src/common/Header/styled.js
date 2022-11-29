import styled from "styled-components"

export const HeaderArea = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 23px 0;
`;

export const HeaderContainer = styled.div`
  max-width: 1920px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const TextSide = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  flex-shrink: 0;
`;

export const Title = styled.a`//dadać NavLink po podpięciu react-router
  margin: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  margin-right: 12px;
`;

export const NavList = styled.ul`
  margin: 0 0 0 72px;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const ListItem = styled.li`
  margin: 0 8px;
`;

export const ListLink = styled.a`//dadać NavLink po podpięciu react-router
  font-size: 14px;
  font-weight: 600;
  padding: 14px 24px;
  text-transform: uppercase;
  text-decoration: none;

  &:active{
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.navigationLinks};
  }
`;

export const SearchBar = styled.div`
  position: relative;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 11px;
  left: 14px;
`;

export const SearchInput = styled.input`
  width: 432px;
  border-radius: ${({ theme }) => theme.radius.navigationInput};
  border: none;
  padding: 14px 12px 14px 45px;
  font-weight: 400;
  
  ::placeholder {
    
    font-size: 13px;
    color: #7E839A;
  }
`;
