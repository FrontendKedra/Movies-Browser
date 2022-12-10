import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "loading",
    movie: [],
  },
  reducers: {
    fetchMovieDetails: () => ({
      status: "loading",
      movie: [],
    }),
    fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => ({
      status: "success",
      movie: [movieDetails],
    }),
    fetchMovieDetailsError: () => ({
      status: "error",
      movie: [],
    }),
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;

export const selectMovieStatus = (state) =>
  selectMovieState(state).status;

export const selectMovie = (state) => selectMovieState(state).movie;

export default movieDetailsSlice.reducer;
