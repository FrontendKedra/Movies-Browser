import { useDispatch } from "react-redux";
import { fetchSearch } from "./searchSlice";
import { useLocation } from "react-router";
import useQueryParameter from "../../features/useQueryParameter";
import { useReplaceQueryParameter } from "../../features/useReplaceQueryParameter";
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

  const dispatch = useDispatch();
  const location = useLocation();

  const query = useQueryParameter("search");
  const replaceQueryParam = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParam({
      key: "search",
      value: target.value.trim(),
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchSearch(query));
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
            onSubmit={onFormSubmit}
          >
          </SearchInput>
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
