import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genres",
  initialState: {
    genre: [],
  },
  reducers: {
    fetchGenres: () => ({
      genre: [],
    }),
    fetchGenresSuccess: (state, { payload: genresApi }) => ({
      genre: genresApi.genres,
    }),
    fetchGenresError: () => ({
      genre: [],
    }),
  },
});

export const { fetchGenres, fetchGenresSuccess, fetchGenresError } =
  genreSlice.actions;

export const selectGenresState = (state) => state.genres;

export const selectGenres = (state) => selectGenresState(state).genre;

export default genreSlice.reducer;
