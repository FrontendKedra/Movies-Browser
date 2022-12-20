import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    status: "loading",
    person: [],
    cast: [],
    crew: [],
  },
  reducers: {
    fetchPerson: () => ({
      status: "loading",
      person: [],
      cast: [],
      crew: [],
    }),
    fetchPersonSuccess: (state, { payload: { person, details } }) => ({
      status: "success",
      person: [details],
      cast: person.cast,
      crew: person.crew,
    }),
    fetchPersonError: () => ({
      status: "error",
      person: [],
      cast: [],
      crew: [],
    }),
  },
});

export const { fetchPerson, fetchPersonSuccess, fetchPersonError } =
  personSlice.actions;

export const selectPersonState = (state) => state.person;

export const selectPersonStatus = (state) => selectPersonState(state).status;

export const selectPerson = (state) => selectPersonState(state).person;

export const selectCrew = (state) => selectPersonState(state).crew;

export const selectCast = (state) => selectPersonState(state).cast;

export default personSlice.reducer;
