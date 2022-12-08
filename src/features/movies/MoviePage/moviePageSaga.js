import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import { fetchMoviePage, fetchMoviePageError, fetchMoviePageSuccess } from "./moviePageSlice";

function* fetchMoviePageHandler({ payload: id }) {
    try {
      delay(1500);
      const movie = yield call(
        getApiDatabase,
        `${baseUrl}/movie/${id}/credits${apiKey}${language}`
      );
      yield put(fetchMoviePageSuccess(movie));
    } catch (error) {
      yield put(fetchMoviePageError());
    }
  }

export function* watchFetchMoviePage() {
    yield takeLatest(fetchMoviePage.type, fetchMoviePageHandler);
}