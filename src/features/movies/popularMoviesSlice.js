import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    status: "loading",
    movies: [],
    totalPages: 0,
  },
  reducers: {
    fetchPopularMovies: () => ({
      status: "loading",
      movies: [],
      totalPages: 0,
    }),
    fetchPopularMoviesSuccess: (state, { payload: movies }) => ({
      status: "success",
      movies: movies.results,
      totalPages: movies.total_pages,
    }),
    fetchPopularMoviesError: () => ({
      status: "error",
      movies: [],
      totalPages: 0,
    }),
    resetToInitialState: () => ({
      status: "loading",
      movies: [],
      totalPages: 0,
    }),
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  resetToInitialState,
} = popularMoviesSlice.actions;

export const selectPopularMoviesState = (state) => state.popularMovies;

export const selectPopularMoviesStatus = (state) =>
  selectPopularMoviesState(state).status;

export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).movies;

export const selectPopularMoviesTotalPages = (state) =>
  selectPopularMoviesState(state).totalPages;

export default popularMoviesSlice.reducer;
