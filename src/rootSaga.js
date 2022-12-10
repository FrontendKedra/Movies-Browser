import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/popularMoviesSaga";
import { watchFetchPersonDetails } from "./features/people/personDetailsSaga";
import { watchFetchPerson } from "./features/people/PersonPage/personSaga";
import { watchFetchPopularPeople } from "./features/people/popularPeopleSaga";
import { watchFetchMovieDetails } from "./features/movies/MoviePage/movieDetailsSaga";
import { watchFetchMovie } from "./features/movies/MoviePage/movieSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchPopularPeople(),
    watchFetchPerson(),
    watchFetchPersonDetails(),
    watchFetchMovieDetails(),
    watchFetchMovie(),
  ]);
}
