import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genres",
  initialState: {
    state: "initial",
    genre: [],
  },
  reducers: {
    fetchGenres: () => ({
      state: "loading",
      genre: [],
    }),
    fetchGenresSuccess: (state, { payload: genresApi }) => ({
      state: "success",
      genre: genresApi.genres,
    }),
    fetchGenresError: () => ({
      state: "error"
    }),
  },
});

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } =
  genreSlice.actions;

export const selectGenresState = (state) => state.genres;

export const selectGenres = (state) => selectGenresState(state).genre;

export default genreSlice.reducer;
