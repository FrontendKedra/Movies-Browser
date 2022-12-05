import { call, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../ApiValue";
import { getApiDatabase } from "../../getApiDatabase";
import {
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler() {
  try {
    const people = yield call(
      getApiDatabase,
      `${baseUrl}/person/popular${apiKey}${language}`
    );
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError);
  }
}

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
}
