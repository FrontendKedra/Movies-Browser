import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../ApiValue";
import { getApiDatabase } from "../../getApiDatabase";

import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield delay(1500);
    const movies = yield call(
      getApiDatabase,
      `${baseUrl}/movie/popular${apiKey}${language}&page=${page}`
    );
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}
