import { GenreContainer, GenreItem } from "./styled";

export const Genre = ({ genre_ids, genres }) => {
  const filteredGenres = genres.filter(({ id }) => genre_ids.includes(id));

  return (
    <GenreContainer>
      {filteredGenres.map(({ name }) => (
        <GenreItem key={name}>{name}</GenreItem>
      ))}
    </GenreContainer>
  );
};
