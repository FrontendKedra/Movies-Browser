import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./popularMoviesSaga";
import { watchFetchPopularPeople } from "./popularPeopleSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies(), watchFetchPopularPeople()]);
}
