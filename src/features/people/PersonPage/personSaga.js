import { call, put, takeLatest, all } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
} from "./personSlice";

function* fetchPersonHandler({ payload: id }) {
  const personPath = `${baseUrl}/person/${id}/movie_credits${apiKey}${language}`;
  const detailsPath = `${baseUrl}/person/${id}${apiKey}${language}`;
  try {
    const [person, details] = yield all([
      call(getApiDatabase, personPath),
      call(getApiDatabase, detailsPath),
    ]);
    yield put(fetchPersonSuccess({ person, details }));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPerson() {
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
}
