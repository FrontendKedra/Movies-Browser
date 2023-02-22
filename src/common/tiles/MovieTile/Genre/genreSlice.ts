import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";
import { Genres } from "../../../../apiInterfaces/genres";

interface GenreState {
  status: string;
  genre: Genres[];
}

const initialState: GenreState = {
  status: "initial",
  genre: [],
};

const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    fetchGenres: (state) => {
      state.status = "loading";
      state.genre = [];
    },
    fetchGenresSuccess: (state, { payload: genresApi }) => {
      state.status = "success";
      state.genre = genresApi.genres;
    },
    fetchGenresError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } =
  genreSlice.actions;

export const selectGenresState = (state: RootState) => state.genres;

export const selectGenres = (state: RootState) =>
  selectGenresState(state).genre;

export default genreSlice.reducer;
