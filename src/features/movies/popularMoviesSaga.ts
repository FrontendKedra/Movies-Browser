import { call, debounce, delay, put } from "redux-saga/effects";
import { PopularPayload } from "../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { MoviePopularAndSearch } from "../../apiInterfaces/movieInterfaces/moviePopularAndSearch";
import { apiKey, baseUrl, language } from "../../ApiValue";
import { getApiDatabase } from "../../getApiDatabase";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} from "./popularMoviesSlice";

function* fetchPopularMoviesHandler({
  payload: { page, query },
}: PopularPayload) {
  const path =
    query === null
      ? `${baseUrl}/movie/popular${apiKey}${language}&page=${page}`
      : (page !== null
      ? `${baseUrl}/search/movie${apiKey}${language}&query=${query}&page=${page}`
      : `${baseUrl}/search/movie${apiKey}${language}&query=${query}&page=${"1"}`);

  yield delay(500);

  try {
    const movies: MoviePopularAndSearch = yield call(
      getApiDatabase<MoviePopularAndSearch>,
      path
    );
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* watchFetchPopularMovies() {
  yield debounce(500, fetchPopularMovies, fetchPopularMoviesHandler);
}
