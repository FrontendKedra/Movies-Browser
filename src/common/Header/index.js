import { useLocation } from "react-router";
import useQueryParameter from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
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

  const location = useLocation();

  const query = useQueryParameter("search");
  const replaceQueryParam = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParam({
      key: "search",
      value: target.value.trim() !== "" ? target.value : "",
    });
  };

  return (
    <HeaderArea>
      <HeaderContainer>
        <TextSide>
          <Title to="/">
            <Icon src={camera} alt="" />
            Movies Browser
          </Title>
          <nav>
            <NavList>
              <ListItem>
                <ListLink to="/movie-list">Movies</ListLink>
              </ListItem>
              <ListItem>
                <ListLink to="/people">People</ListLink>
              </ListItem>
            </NavList>
          </nav>
        </TextSide>
        <SearchBar>
          <SearchIcon src={search} alt="" />
          <SearchInput
            placeholder={
              `Search for ${location.pathname === "/people" ||
                location.pathname.indexOf("/profile") === 0
                ? "people..."
                : "movies..."
              }`
            }
            value={query || ""}
            onChange={onInputChange}
          />
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
