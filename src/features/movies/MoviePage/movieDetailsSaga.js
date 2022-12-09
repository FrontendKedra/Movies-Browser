import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchMovieDetails,
  fetchMovieDetailsError,
  fetchMovieDetailsSuccess,
} from "./movieDetailsSlice";

function* fetchMovieDetailsHandler({ payload: id }) {
  try {
    delay(1500);
    const movieDetails = yield call(
      getApiDatabase,
      `${baseUrl}/movie/${id}${apiKey}${language}`
    );
    yield put(fetchMovieDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

export function* watchFetchMovieDetails() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
