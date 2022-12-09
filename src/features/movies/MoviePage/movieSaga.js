import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import { fetchMovie, fetchMovieError, fetchMovieSuccess } from "./movieSlice";

function* fetchMovieHandler({ payload: id }) {
    try {
      delay(1500);
      const movie = yield call(
        getApiDatabase,
        `${baseUrl}/movie/${id}/credits${apiKey}${language}`
      );
      yield put(fetchMovieSuccess(movie));
    } catch (error) {
      yield put(fetchMovieError());
    }
  }

export function* watchFetchMovie() {
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
}