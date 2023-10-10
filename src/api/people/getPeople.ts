import { apiKey, baseUrl, language } from "../../ApiValue";
import { PersonPopularAndSearch } from "../../apiInterfaces/peopleInterfaces/personPopularAndSearch";
import { wait } from "../wait";

export const getPeople = async ({ queryKey }: any) => {
  await wait(500);

  const [, { page, query }] = queryKey;

  const path =
    query === null
      ? `${baseUrl}/person/popular${apiKey}${language}&page=${page}`
      : `${baseUrl}/search/person${apiKey}${language}&query=${query}&page=${page}`;

  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = (await response.json()) as PersonPopularAndSearch;

  return data;
};
