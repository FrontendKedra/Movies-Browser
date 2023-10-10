import { apiKey, baseUrl, language } from "../../ApiValue";
import { MoviePopularAndSearch } from "../../apiInterfaces/movieInterfaces/moviePopularAndSearch";
import { wait } from "../wait";

export const getMovies = async ({ queryKey }: any) => {
  await wait(500);

  const [, { page, query }] = queryKey;

  const path =
    query === null
      ? `${baseUrl}/movie/popular${apiKey}${language}&page=${page}`
      : `${baseUrl}/search/movie${apiKey}${language}&query=${query}&page=${page}`;

  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = (await response.json()) as MoviePopularAndSearch;

  return data;
};
