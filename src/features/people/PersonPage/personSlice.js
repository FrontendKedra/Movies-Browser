import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    status: "loading",
    cast: [],
    crew: [],
  },
  reducers: {
    fetchPerson: () => ({
      status: "loading",
      cast: [],
      crew: [],
    }),
    fetchPersonSuccess: (state, { payload: person }) => ({
      status: "success",
      cast: person.cast,
      crew: person.crew,
    }),
    fetchPersonError: () => ({
      status: "error",
      cast: [],
      crew: [],
    }),
    resetToInitialState: () => ({
      status: "loading",
      cast: [],
      crew: [],
    }),
  },
});

export const {
  fetchPerson,
  fetchPersonSuccess,
  fetchPersonError,
  resetToInitialState,
} = personSlice.actions;

export const selectPersonState = (state) => state.person;

export const selectPersonStatus = (state) => selectPersonState(state).status;

export const selectCrew = (state) => selectPersonState(state).crew;

export const selectCast = (state) => selectPersonState(state).cast;

export default personSlice.reducer;
