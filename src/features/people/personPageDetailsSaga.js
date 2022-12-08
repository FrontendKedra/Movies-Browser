import { call, delay, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language } from "../../ApiValue"
import { getApiDatabase } from "../../getApiDatabase";
import {
  fetchPersonDetailsPage,
  fetchPersonDetailsPageError,
  fetchPersonDetailsPageSuccess,
} from "./personPageDetailsSlice";

function* fetchPersonDetailsPageHandler({ payload: id }) {
  try {
    delay(1500);
    const details = yield call(
      getApiDatabase,
      `${baseUrl}/person/${id}${apiKey}${language}`
    );
    yield put(fetchPersonDetailsPageSuccess(details));
  } catch (error) {
    yield put(fetchPersonDetailsPageError());
  }
}

export function* watchFetchPersonDetailsPage() {
  yield takeLatest(fetchPersonDetailsPage.type, fetchPersonDetailsPageHandler);
}
