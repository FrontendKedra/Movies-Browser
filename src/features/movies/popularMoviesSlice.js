import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    status: "loading",
    movies: [],
  },
  reducers: {
    fetchPopularMovies: () => ({
      status: "loading",
      movies: [],
    }),
    fetchPopularMoviesSuccess: (state, { payload: movies }) => ({
      status: "success",
      movies: movies.results,
    }),
    fetchPopularMoviesError: () => ({
      status: "error",
      movies: [],
    }),
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} = popularMoviesSlice.actions;

export const selectPopularMoviesState = (state) => state.popularMovies;

export const selectPopularMoviesStatus = (state) =>
  selectPopularMoviesState(state).status;

export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).movies;

export default popularMoviesSlice.reducer;
