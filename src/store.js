import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import popularMoviesReducer from "./features/movies/popularMoviesSlice";
import popularPeopleReducer from "./features/people/popularPeopleSlice";
import personPageReducer from "./features/people/PersonPage/personPageSlice";
import personPageDetailsReducer from "./features/people/personPageDetailsSlice";
import moviePageDetailsReducer from "./features/movies/MoviePage/moviePageDetailsSlice";
import moviePageReducer from "./features/movies/MoviePage/moviePageSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: popularMoviesReducer,
    popularPeople: popularPeopleReducer,
    personPage: personPageReducer,
    personPageDetails: personPageDetailsReducer,
    moviePageDetails: moviePageDetailsReducer,
    moviePage: moviePageReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
