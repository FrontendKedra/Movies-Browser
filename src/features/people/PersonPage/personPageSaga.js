import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchPersonPage,
  fetchPersonPageError,
  fetchPersonPageSuccess,
} from "./personPageSlice";

function* fetchPersonPageHandler({ payload: id }) {
  try {
    delay(1500);
    const person = yield call(
      getApiDatabase,
      `${baseUrl}/person/${id}/movie_credits${apiKey}${language}`
    );
    yield put(fetchPersonPageSuccess(person));
  } catch (error) {
    yield put(fetchPersonPageError());
  }
}

export function* watchFetchPersonPage() {
  yield takeLatest(fetchPersonPage.type, fetchPersonPageHandler);
}
