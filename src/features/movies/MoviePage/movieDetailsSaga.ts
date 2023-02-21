import { call, put, takeEvery, all, delay } from "redux-saga/effects";
import { MovieCredits } from "../../../apiInterfaces/movieInterfaces/movieCredits";
import { MovieDetails } from "../../../apiInterfaces/movieInterfaces/movieDetails";
import { MovieDetailsCreditsTupple } from "../../../apiInterfaces/movieInterfaces/movieTupple";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";

interface MoviesPayload {
  payload: string;
}

function* fetchMovieDetailsHandler({ payload: id }: MoviesPayload) {
  const movieDetailsPath = `${baseUrl}/movie/${id}${apiKey}${language}`;
  const moviePath = `${baseUrl}/movie/${id}/credits${apiKey}${language}`;

  yield delay(500);

  try {
    const [movieDetails, movie]: MovieDetailsCreditsTupple = yield all([
      call(getApiDatabase<MovieDetails>, movieDetailsPath),
      call(getApiDatabase<MovieCredits>, moviePath),
    ]);
    yield put(fetchMovieDetailsSuccess({ movieDetails, movie }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeEvery(fetchMovieDetails, fetchMovieDetailsHandler);
}
