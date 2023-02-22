import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Result } from "../../apiInterfaces/movieInterfaces/moviePopularAndSearch";

interface PopularMoviesState {
  status: string;
  movies: Result[];
  totalPages: number;
  totalResults: number;
}

const initialState: PopularMoviesState = {
  status: "initial",
  movies: [],
  totalPages: 0,
  totalResults: 0,
};

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState,
  reducers: {
    fetchPopularMovies: (state, { payload }) => {
      state.status = "loading";
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success";
      state.movies = movies.results;
      state.totalPages = movies.total_pages;
      state.totalResults = movies.total_results;
    },
    fetchPopularMoviesError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
} = popularMoviesSlice.actions;

export const selectPopularMoviesState = (state: RootState) =>
  state.popularMovies;

export const selectPopularMoviesStatus = (state: RootState) =>
  selectPopularMoviesState(state).status;
export const selectPopularMovies = (state: RootState) =>
  selectPopularMoviesState(state).movies;
export const selectPopularMoviesTotalPages = (state: RootState) =>
  selectPopularMoviesState(state).totalPages;
export const selectPopularMoviesTotalResults = (state: RootState) =>
  selectPopularMoviesState(state).totalResults;

export default popularMoviesSlice.reducer;
