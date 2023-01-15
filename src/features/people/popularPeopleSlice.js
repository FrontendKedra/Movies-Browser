import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    status: "initial",
    people: [],
    totalResults: 0,
    totalPages: 0,
  },
  reducers: {
    fetchPopularPeople: () => ({
      status: "loading",
    }),
    fetchPopularPeopleSuccess: (state, { payload: people }) => ({
      status: "success",
      people: people.results,
      totalResults: people.total_results,
      totalPages: people.total_pages,
    }),
    fetchPopularPeopleError: () => ({
      status: "error",
    }),
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
} = popularPeopleSlice.actions;

export const selectPopularPeopleState = (state) => state.popularPeople;

export const selectPopularPeopleStatus = (state) =>
  selectPopularPeopleState(state).status;
export const selectPopularPeople = (state) =>
  selectPopularPeopleState(state).people;
export const selectPopularPeopleToatalResults = (state) =>
  selectPopularPeopleState(state).totalResults;
export const selectPopularPeopleTotalPages = (state) =>
  selectPopularPeopleState(state).totalPages;

export default popularPeopleSlice.reducer;
