import { useSelector } from "react-redux";
import { selectGenres } from "./genreSlice";
import { GenreContainer, GenreItem } from "./styled";

export const Genre = ({ genre_ids }) => {
  const genres = useSelector(selectGenres);

  const filteredGenres = genre_ids.map((genre) =>
    genres.filter(({ id }) => genre === id)
  );

  return (
    <GenreContainer>
      {filteredGenres.map((genre) =>
        genre.map(({ name }) => <GenreItem key={genre_ids}>{name}</GenreItem>)
      )}
    </GenreContainer>
  );
};
