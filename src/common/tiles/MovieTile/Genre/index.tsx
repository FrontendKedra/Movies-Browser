import { Genres } from "../../../../apiInterfaces/genres";
import { GenreContainer, GenreItem } from "./styled";

interface GenreProps {
  genre_ids: number[];
  genres: Genres[];
}

export const Genre = ({ genre_ids, genres }: GenreProps) => {
  const filteredGenres = genres.filter(({ id }) => genre_ids.includes(id));

  return (
    <GenreContainer>
      {filteredGenres.map(({ name }) => (
        <GenreItem key={name}>{name}</GenreItem>
      ))}
    </GenreContainer>
  );
};
