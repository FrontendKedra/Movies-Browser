import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    status: "loading",
    people: [],
  },
  reducers: {
    fetchPopularPeople: () => ({
      status: "loading",
      people: [],
    }),
    fetchPopularPeopleSuccess: (state, { payload: people }) => ({
      status: "success",
      people: people.results,
    }),
    fetchPopularPeopleError: () => ({
      status: "error",
      people: [],
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

export default popularPeopleSlice.reducer;
