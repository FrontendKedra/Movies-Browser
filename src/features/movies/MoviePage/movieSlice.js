import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    status: "loading",
    cast: [],
    crew: [],
  },
  reducers: {
    fetchMovie: () => ({
      status: "loading",
      cast: [],
      crew: [],
    }),
    fetchMovieSuccess: (state, { payload: movie }) => ({
      status: "success",
      cast: movie.cast,
      crew: movie.crew,
    }),
    fetchMovieError: () => ({
      status: "error",
      cast: [],
      crew: [],
    }),
  },
});

export const {
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieError,
} = movieSlice.actions;

export const selectMovieState = (state) => state.movie;

export const selectMovieStatus = (state) =>
  selectMovieState(state).status;

export const selectMovieCast = (state) => selectMovieState(state).cast;

export const selectMovieCrew = (state) => selectMovieState(state).crew;

export default movieSlice.reducer;
