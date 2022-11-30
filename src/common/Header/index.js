import {
  HeaderArea,
  HeaderContainer,
  Icon,
  ListItem,
  ListLink,
  NavList,
  SearchBar,
  SearchIcon,
  SearchInput,
  TextSide,
  Title,
} from "./styled";
import camera from "./icons/camera.svg";
import search from "./icons/search.svg";

export const Header = () => {
  return (
    <HeaderArea>
      <HeaderContainer>
        <TextSide>
          <Title>
            <Icon src={camera} alt="" />
            Movies Browser
          </Title>
          <nav>
            <NavList>
              <ListItem>
                <ListLink>Movies</ListLink>
              </ListItem>
              <ListItem>
                <ListLink>People</ListLink>
              </ListItem>
            </NavList>
          </nav>
        </TextSide>
        <SearchBar>
          <SearchIcon src={search} alt="" />
          <SearchInput
            placeholder={"Search for movies/people..."}
          ></SearchInput>
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
