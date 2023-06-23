import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { MovieDetails } from "../../../apiInterfaces/movieInterfaces/movieDetails";
import {
  Cast,
  Crew,
} from "../../../apiInterfaces/movieInterfaces/movieCredits";

interface MovieDetailsState {
  status: string;
  movie: MovieDetails[];  
  cast: Cast[];
  crew: Crew[];
}

const initialState: MovieDetailsState = {
  status: "initial",
  movie: [],
  cast: [],
  crew: [],
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    fetchMovieDetails: (state, { payload }) => {
      state.status = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload: { movieDetails, movie } }) => {
      state.status = "success";
      state.movie = [movieDetails];
      state.cast = movie.cast;
      state.crew = movie.crew;
    },
    fetchMovieDetailsError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = movieDetailsSlice.actions;

export const selectMovieState = (state: RootState) => state.movieDetails;

export const selectMovieStatus = (state: RootState) =>
  selectMovieState(state).status;
export const selectMovie = (state: RootState) => selectMovieState(state).movie;
export const selectMovieCast = (state: RootState) =>
  selectMovieState(state).cast;
export const selectMovieCrew = (state: RootState) =>
  selectMovieState(state).crew;

export default movieDetailsSlice.reducer;
