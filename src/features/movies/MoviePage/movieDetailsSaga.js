import { all } from "axios";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";

function* fetchMovieDetailsHandler({ payload: id }) {
  const movieDetailsPath = `${baseUrl}/movie/${id}${apiKey}${language}`;
  const moviePath = `${baseUrl}/movie/${id}/credits${apiKey}${language}`;

  try {
    delay(1500);
    const [movieDetails, movie] = yield all([
      call(getApiDatabase, movieDetailsPath),
      call(getApiDatabase, moviePath),
    ]);

    yield put(fetchMovieDetailsSuccess({ movieDetails, movie }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
