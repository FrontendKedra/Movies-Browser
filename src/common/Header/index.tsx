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
import { useEffect, useState } from "react";

export const Header = () => {
  const location = useLocation();

  const queryInUrl = useQueryParameter("search");

  const [inputValue, setInputValue] = useState(queryInUrl);

  useEffect(() => {
    setInputValue(queryInUrl);
  }, [queryInUrl]);

  const replaceQueryParam = useReplaceQueryParameter(setInputValue);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    replaceQueryParam({
      key: "search",
      value: event.target.value.trim() !== "" ? event.target.value : "",
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
            placeholder={`Search for ${
              location.pathname.includes("/people") ? "people..." : "movies..."
            }`}
            value={inputValue || ""}
            onChange={onInputChange}
          />
        </SearchBar>
      </HeaderContainer>
    </HeaderArea>
  );
};
