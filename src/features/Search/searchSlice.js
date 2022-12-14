import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    status: "loading",
    movies: [],
    query: "",
    totalResults: 0,
  },
  reducers: {
    fetchSearch: () => ({}),
    fetchSearchSuccess: (state, { payload: movies }) => ({
      status: "succes",
      movies: movies.results,
      totalResults: movies.total_results,
    }),
    fetchSearchError: () => ({
      status: "error",
      movies: [],
      totalResults: 0,
    }),
    setQuery: (state, { payload: query }) => {
      state.query = query;
    },
  },
});

export const { fetchSearch, fetchSearchSuccess, fetchSearchError, setQuery } =
  searchSlice.actions;

export const selectSearchState = (state) => state.search;

export const selectSearchMovies = (state) => selectSearchState(state).movies;
export const selectSearchStatus = (state) => selectSearchState(state).status;
export const selectSearchQuery = (state) => selectSearchState(state).query;
export const selectSearchTotalResults = (state) =>
  selectSearchState(state).totalResults;

export default searchSlice.reducer;
