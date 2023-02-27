import { call, debounce, delay, put } from "redux-saga/effects";
import { PopularPayload } from "../../apiInterfaces/generalTypesInterfaces/typesAndInterfaces";
import { PersonPopularAndSearch } from "../../apiInterfaces/peopleInterfaces/personPopularAndSearch";
import { apiKey, baseUrl, language } from "../../ApiValue";
import { getApiDatabase } from "../../getApiDatabase";
import {
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} from "./popularPeopleSlice";

function* fetchPopularPeopleHandler({
  payload: { page, query },
}: PopularPayload) {
  const path =
    query === null
      ? `${baseUrl}/person/popular${apiKey}${language}&page=${page}`
      : (page !== null
      ? `${baseUrl}/search/person${apiKey}${language}&query=${query}&page=${page}`
      : `${baseUrl}/search/person${apiKey}${language}&query=${query}&page=${"1"}`);

  yield delay(500);

  try {
    const people: PersonPopularAndSearch = yield call(
      getApiDatabase<PersonPopularAndSearch>,
      path
    );
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

export function* watchFetchPopularPeople() {
  yield debounce(500, fetchPopularPeople, fetchPopularPeopleHandler);
}
