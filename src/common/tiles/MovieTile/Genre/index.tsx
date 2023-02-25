import { GenreProps } from "../../../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { GenreContainer, GenreItem } from "./styled";

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
