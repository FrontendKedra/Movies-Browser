import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../ApiValue";
import { getApiDatabase } from "../../getApiDatabase";

import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: { page, query } }) {
  const path =
    query === null
      ? `${baseUrl}/movie/popular${apiKey}${language}&page=${page}`
      : `${baseUrl}/search/movie${apiKey}${language}&query=${query}&page=${page}`;

  try {
    yield delay(1500);
    const movies = yield call(getApiDatabase, path);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}
