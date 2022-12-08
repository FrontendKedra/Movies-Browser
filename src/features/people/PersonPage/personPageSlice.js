import { createSlice } from "@reduxjs/toolkit";

const personPageSlice = createSlice({
  name: "personPage",
  initialState: {
    status: "loading",
    cast: [],
    crew: [],
  },
  reducers: {
    fetchPersonPage: () => ({
      status: "loading",
      cast: [],
      crew: [],
    }),
    fetchPersonPageSuccess: (state, { payload: person }) => ({
      status: "success",
      cast: person.cast,
      crew: person.crew,
    }),
    fetchPersonPageError: () => ({
      status: "error",
      cast: [],
      crew: [],
    }),
  },
});

export const {
  fetchPersonPage,
  fetchPersonPageSuccess,
  fetchPersonPageError,
} = personPageSlice.actions;

export const selectPersonPageState = (state) => state.personPage;

export const selectPersonPageStatus = (state) =>
  selectPersonPageState(state).status;

export const selectCrew = (state) => selectPersonPageState(state).crew;

export const selectCast = (state) => selectPersonPageState(state).cast;

export default personPageSlice.reducer;
