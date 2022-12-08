import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/popularMoviesSaga";
import { watchFetchPersonDetailsPage } from "./features/people/personPageDetailsSaga";
import { watchFetchPersonPage } from "./features/people/PersonPage/personPageSaga";
import { watchFetchPopularPeople } from "./features/people/popularPeopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchPopularPeople(),
    watchFetchPersonPage(),
    watchFetchPersonDetailsPage(),
  ]);
}
