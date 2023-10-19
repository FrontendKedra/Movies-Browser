import { apiKey, baseUrl, language } from "./ApiValue";
import { Genres } from "../apiInterfaces/genresInterfaces/genres";
import { wait } from "./wait";

export const getGenres = async () => {
  await wait(500);

  const response = await fetch(
    `${baseUrl}/genre/movie/list${apiKey}${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = (await response.json()) as Genres;

  return data;
};
