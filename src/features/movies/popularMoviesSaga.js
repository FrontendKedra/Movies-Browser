import { call, debounce, delay, put } from "redux-saga/effects";
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

  yield delay(500);

  try {
    const movies = yield call(getApiDatabase, path);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield debounce(500, fetchPopularMovies.type, fetchPopularMoviesHandler);
}
