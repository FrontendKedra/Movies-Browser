import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
  name: "moviePage",
  initialState: {
    status: "loading",
    cast: [],
    crew: [],
  },
  reducers: {
    fetchMoviePage: () => ({
      status: "loading",
      cast: [],
      crew: [],
    }),
    fetchMoviePageSuccess: (state, { payload: movie }) => ({
      status: "success",
      cast: movie.cast,
      crew: movie.crew,
    }),
    fetchMoviePageError: () => ({
      status: "error",
      cast: [],
      crew: [],
    }),
  },
});

export const {
  fetchMoviePage,
  fetchMoviePageSuccess,
  fetchMoviePageError,
} = moviePageSlice.actions;

export const selectMoviePageState = (state) => state.moviePage;

export const selectMoviePageStatus = (state) =>
  selectMoviePageState(state).status;

export const selectMoviePageCast = (state) => selectMoviePageState(state).cast;

export const selectMoviePageCrew = (state) => selectMoviePageState(state).crew;

export default moviePageSlice.reducer;
