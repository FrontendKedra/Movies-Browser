import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    status: "loading",
    movie: [],
    cast: [],
    crew: [],
  },
  reducers: {
    fetchMovieDetails: () => ({
      status: "loading",
      movie: [],
      cast: [],
      crew: [],
    }),
    fetchMovieDetailsSuccess: (
      state,
      { payload: { movieDetails, movie } }
    ) => ({
      status: "success",
      movie: [movieDetails],
      cast: movie.cast,
      crew: movie.crew,
    }),
    fetchMovieDetailsError: () => ({
      status: "error",
      movie: [],
      cast: [],
      crew: [],
    }),
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieState = (state) => state.movieDetails;

export const selectMovieStatus = (state) => selectMovieState(state).status;
export const selectMovie = (state) => selectMovieState(state).movie;
export const selectMovieCast = (state) => selectMovieState(state).cast;
export const selectMovieCrew = (state) => selectMovieState(state).crew;

export default movieDetailsSlice.reducer;
