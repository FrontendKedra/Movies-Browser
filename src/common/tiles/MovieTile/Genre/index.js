import { GenreContainer, GenreItem } from "./styled";

export const Genre = ({ genre_ids, genres }) => {
  const filteredGenres = (genre_ids
    .map((genre) => genres.filter(({ id }) => genre === id))
  ).flat();

  return (
    <GenreContainer>
      {filteredGenres.map(({ name }) => (
        <GenreItem key={name}>{name}</GenreItem>
      ))}
    </GenreContainer>
  );
};
