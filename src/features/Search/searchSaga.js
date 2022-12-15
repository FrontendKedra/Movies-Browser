import { call, debounce, put } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../ApiValue";
import { getApiDatabase } from "../../getApiDatabase";
import {
  fetchSearchSuccess,
  fetchSearchError,
  fetchSearch,
} from "./searchSlice";

function* fetchSearchQueryHandler({ payload: query }) {
  try {
    const movies = yield call(
      getApiDatabase,
      `${baseUrl}/search/movie${apiKey}${language}&query=${query}`
    );
    yield put(fetchSearchSuccess(movies));
  } catch (error) {
    yield put(fetchSearchError());
  }
}

export function* watchFetchSearchQuery() {
  yield debounce(3000, fetchSearch.type, fetchSearchQueryHandler);
}