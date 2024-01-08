import { apiKey, baseUrl, language } from "../ApiValue";
import { MovieCredits } from "../../apiInterfaces/movieInterfaces/movieCredits";
import { MovieDetails } from "../../apiInterfaces/movieInterfaces/movieDetails";
import { wait } from "../wait";

export const getMovieDetails = async ({ queryKey }: any) => {
  await wait(500);

  const [, { id }] = queryKey;

  const detailsResponse = await fetch(
    `${baseUrl}/movie/${id}${apiKey}${language}`
  );

  if (!detailsResponse.ok) {
    throw new Error(detailsResponse.statusText);
  }

  const creditsResponse = await fetch(
    `${baseUrl}/movie/${id}/credits${apiKey}${language}`
  );

  if (!creditsResponse.ok) {
    throw new Error(creditsResponse.statusText);
  }

  const detailsData = (await detailsResponse.json()) as MovieDetails;
  const creditsData = (await creditsResponse.json()) as MovieCredits;

  return { details: [detailsData], credits: creditsData };
};
