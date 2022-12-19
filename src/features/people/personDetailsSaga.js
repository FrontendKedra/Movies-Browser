// import { call, delay, put, takeLatest } from "redux-saga/effects";
// import { apiKey, baseUrl, language } from "../../ApiValue"
// import { getApiDatabase } from "../../getApiDatabase";
// import {
//   fetchPersonDetails,
//   fetchPersonDetailsError,
//   fetchPersonDetailsSuccess,
// } from "./personDetailsSlice";

// function* fetchPersonDetailsHandler({ payload: id }) {
//   try {
//     delay(1500);
//     const details = yield call(
//       getApiDatabase,
//       `${baseUrl}/person/${id}${apiKey}${language}`
//     );
//     yield put(fetchPersonDetailsSuccess(details));
//   } catch (error) {
//     yield put(fetchPersonDetailsError());
//   }
// }

// export function* watchFetchPersonDetails() {
//   yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
// }
