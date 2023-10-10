import { apiKey, baseUrl, language } from "../../ApiValue";
import { PersonDetails } from "../../apiInterfaces/peopleInterfaces/personDetails";
import { PersonMovieCredits } from "../../apiInterfaces/peopleInterfaces/personMovieCredits";
import { wait } from "../wait";

export const getPersonDetails = async ({ queryKey }: any) => {
  await wait(500);

  const [, { id }] = queryKey;

  const detailsResponse = await fetch(
    `${baseUrl}/person/${id}${apiKey}${language}`
  );

  if (!detailsResponse.ok) {
    throw new Error(detailsResponse.statusText);
  }

  const creditsResponse = await fetch(
    `${baseUrl}/person/${id}/movie_credits${apiKey}${language}`
  );

  if (!creditsResponse.ok) {
    throw new Error(creditsResponse.statusText);
  }

  const detailsData = (await detailsResponse.json()) as PersonDetails;
  const creditsData = (await creditsResponse.json()) as PersonMovieCredits;

  return { details: [detailsData], credits: creditsData };
};
