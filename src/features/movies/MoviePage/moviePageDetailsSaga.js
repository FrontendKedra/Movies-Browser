import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchMoviePageDetails,
  fetchMoviePageDetailsError,
  fetchMoviePageDetailsSuccess,
} from "./moviePageDetailsSlice";

function* fetchMoviePageDetailsHandler({ payload: id }) {
  try {
    delay(1500);
    const movieDetails = yield call(
      getApiDatabase,
      `${baseUrl}/movie/${id}${apiKey}${language}`
    );
    yield put(fetchMoviePageDetailsSuccess(movieDetails));
  } catch (error) {
    yield put(fetchMoviePageDetailsError());
  }
}

export function* watchFetchMoviePageDetails() {
  yield takeLatest(fetchMoviePageDetails.type, fetchMoviePageDetailsHandler);
}
