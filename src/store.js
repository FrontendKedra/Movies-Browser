import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import popularMoviesReducer from "./popularMoviesSlice";
import { watchFetchPopularMovies } from "./popularMoviesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchPopularMovies);

export default store;
