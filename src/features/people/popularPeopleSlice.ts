import { createSlice } from "@reduxjs/toolkit";
import { Result } from "../../apiInterfaces/peopleInterfaces/personPopularAndSearch";
import { RootState } from "../../store";

interface PopularPeopleState {
  status: string;
  people: Result[];
  totalPages: number;
  totalResults: number;
}

const initialState: PopularPeopleState = {
  status: "initial",
  people: [],
  totalPages: 0,
  totalResults: 0,
};

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState,
  reducers: {
    fetchPopularPeople: (state, { payload }) => {
      state.status = "loading";
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.status = "success";
      state.people = people.results;
      state.totalResults = people.total_results;
      state.totalPages = people.total_pages;
    },
    fetchPopularPeopleError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
} = popularPeopleSlice.actions;

export const selectPopularPeopleState = (state: RootState) =>
  state.popularPeople;
export const selectPopularPeopleStatus = (state: RootState) =>
  selectPopularPeopleState(state).status;
export const selectPopularPeople = (state: RootState) =>
  selectPopularPeopleState(state).people;
export const selectPopularPeopleToatalResults = (state: RootState) =>
  selectPopularPeopleState(state).totalResults;
export const selectPopularPeopleTotalPages = (state: RootState) =>
  selectPopularPeopleState(state).totalPages;

export default popularPeopleSlice.reducer;
