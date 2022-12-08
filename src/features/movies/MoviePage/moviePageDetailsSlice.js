import { createSlice } from "@reduxjs/toolkit";

const moviePageDetailsSlice = createSlice({
  name: "moviePageDetails",
  initialState: {
    status: "loading",
    movie: [],
  },
  reducers: {
    fetchMoviePageDetails: () => ({
      status: "loading",
      movie: [],
    }),
    fetchMoviePageDetailsSuccess: (state, { payload: movieDetails }) => ({
      status: "success",
      movie: [movieDetails],
    }),
    fetchMoviePageDetailsError: () => ({
      status: "error",
      movie: [],
    }),
  },
});

export const {
  fetchMoviePageDetails,
  fetchMoviePageDetailsSuccess,
  fetchMoviePageDetailsError,
} = moviePageDetailsSlice.actions;

export const selectMoviePageState = (state) => state.moviePageDetails;

export const selectMoviePageStatus = (state) =>
  selectMoviePageState(state).status;

export const selectMovie = (state) => selectMoviePageState(state).movie;

export default moviePageDetailsSlice.reducer;
