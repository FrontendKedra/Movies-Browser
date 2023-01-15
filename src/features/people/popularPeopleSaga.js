import { call, debounce, delay, put } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../ApiValue";
import { getApiDatabase } from "../../getApiDatabase";
import {
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({ payload: { page, query } }) {
  const path =
    query === null
      ? `${baseUrl}/person/popular${apiKey}${language}&page=${page}`
      : `${baseUrl}/search/person${apiKey}${language}&query=${query}&page=${page}`;

  yield delay(500);

  try {
    const people = yield call(getApiDatabase, path);
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield debounce(500, fetchPopularPeople.type, fetchPopularPeopleHandler);
}
