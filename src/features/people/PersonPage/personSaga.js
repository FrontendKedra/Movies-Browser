import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
} from "./personSlice";

function* fetchPersonHandler({ payload: id }) {
  try {
    delay(1500);
    const person = yield call(
      getApiDatabase,
      `${baseUrl}/person/${id}/movie_credits${apiKey}${language}`
    );
    yield put(fetchPersonSuccess(person));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPerson() {
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
}
