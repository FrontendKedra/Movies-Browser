import { createSlice } from "@reduxjs/toolkit";

const personDetails = createSlice({
  name: "personDetails",
  initialState: {
    status: "loading",
    person: [],
  },
  reducers: {
    fetchPersonDetails: () => ({
      status: "loading",
      person: [],
    }),
    fetchPersonDetailsSuccess: (state, { payload: details }) => ({
      status: "success",
      person: [details],
    }),
    fetchPersonDetailsError: () => ({
      status: "error",
      person: [],
    }),
  },
});

export const {
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
} = personDetails.actions;

export const selectPersonStates = (state) => state.personDetails;

export const selectPersonStatuss = (state) => selectPersonStates(state).status;

export const selectPerson = (state) => selectPersonStates(state).person;

export default personDetails.reducer;
