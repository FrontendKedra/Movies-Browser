import { call, delay, put, takeLatest } from "redux-saga/effects";
import { Genres } from "../../../../apiInterfaces/genresInterfaces/genres";
import { apiKey, baseUrl, language } from "../../../../ApiValue";
import { getApiDatabase } from "../../../../getApiDatabase";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./genreSlice";

function* fetchGenresHandler() {
  yield delay(500);

  try {
    const genres: Genres = yield call(
      getApiDatabase<Genres>,
      `${baseUrl}/genre/movie/list${apiKey}${language}`
    );
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
