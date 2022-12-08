import { createSlice } from "@reduxjs/toolkit";

const personPageDetails = createSlice({
  name: "personPageDetails",
  initialState: {
      status: "tako",
      person: [],
  },
  reducers: {
    fetchPersonDetailsPage: () => ({
        status: "loading",
        person: [],
      }),
      fetchPersonDetailsPageSuccess: (state, { payload: details }) => ({
        status: "loading",
        person: [details],
      }),
      fetchPersonDetailsPageError: () => ({
        status: "error",
        person: [],
      }),
  },
});

export const {
  fetchPersonDetailsPage,
  fetchPersonDetailsPageSuccess,
  fetchPersonDetailsPageError,
} = personPageDetails.actions;

export const selectPersonPageStates = (state) => state.personPageDetails;

export const selectPersonPageStatuss = (state) =>
  selectPersonPageStates(state).status;

export const selectPerson = (state) => selectPersonPageStates(state).person;

export default personPageDetails.reducer;