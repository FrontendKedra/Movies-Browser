import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import popularMoviesReducer from "./features/movies/popularMoviesSlice";
import popularPeopleReducer from "./features/people/popularPeopleSlice";
import personReducer from "./features/people/PersonPage/personSlice";
import personDetailsReducer from "./features/people/personDetailsSlice";
import movieDetailsReducer from "./features/movies/MoviePage/movieDetailsSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
    person: personReducer,
    personDetails: personDetailsReducer,
    movieDetails: movieDetailsReducer,
    movie: movieReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
