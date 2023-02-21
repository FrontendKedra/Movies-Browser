import { call, put, takeLatest, all, delay } from "redux-saga/effects";
import { PersonDetails } from "../../../apiInterfaces/peopleInterfaces/personDetails";
import { PersonMovieCredits } from "../../../apiInterfaces/peopleInterfaces/personMovieCredits";
import { PersonDetailsCreditsTupple } from "../../../apiInterfaces/peopleInterfaces/personTupple";
import { apiKey, baseUrl, language } from "../../../ApiValue";
import { getApiDatabase } from "../../../getApiDatabase";
import {
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
} from "./personSlice";

interface PersonPayload {
  payload: string;
}

function* fetchPersonHandler({ payload: id }: PersonPayload) {
  const personPath = `${baseUrl}/person/${id}/movie_credits${apiKey}${language}`;
  const detailsPath = `${baseUrl}/person/${id}${apiKey}${language}`;

  yield delay(500);

  try {
    const [person, details]: PersonDetailsCreditsTupple = yield all([
      call(getApiDatabase<PersonMovieCredits>, personPath),
      call(getApiDatabase<PersonDetails>, detailsPath),
    ]);
    yield put(fetchPersonSuccess({ person, details }));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPerson() {
  yield takeLatest(fetchPerson, fetchPersonHandler);
}
