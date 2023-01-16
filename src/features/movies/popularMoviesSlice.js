import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    status: "initial",
    movies: [],
    totalPages: 0,
    query: "",
    totalResults: 0,
  },
  reducers: {
    fetchPopularMovies: () => ({
      status: "loading",
    }),
    fetchPopularMoviesSuccess: (state, { payload: movies }) => ({
      status: "success",
      movies: movies.results,
      totalPages: movies.total_pages,
      totalResults: movies.total_results,
    }),
    fetchPopularMoviesError: () => ({
      status: "error",
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
export const selectPopularMoviesTotalResults = (state) =>
  selectPopularMoviesState(state).totalResults;

export default popularMoviesSlice.reducer;
