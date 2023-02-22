import { createSlice } from "@reduxjs/toolkit";
import {
  Cast,
  Crew,
} from "../../../apiInterfaces/peopleInterfaces/personMovieCredits";
import { RootState } from "../../../store";
import { PersonDetails } from "../../../apiInterfaces/peopleInterfaces/personDetails";

interface PeopleDetailsState {
  status: string;
  person: PersonDetails[];
  cast: Cast[];
  crew: Crew[];
}

const initialState: PeopleDetailsState = {
  status: "initial",
  person: [],
  cast: [],
  crew: [],
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    fetchPerson: (state, { payload }) => {
      state.status = "loading";
    },
    fetchPersonSuccess: (state, { payload: { person, details } }) => {
      state.status = "success";
      state.person = [details];
      state.cast = person.cast;
      state.crew = person.crew;
    },
    fetchPersonError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchPerson, fetchPersonSuccess, fetchPersonError } =
  personSlice.actions;

export const selectPersonState = (state: RootState) => state.person;

export const selectPersonStatus = (state: RootState) =>
  selectPersonState(state).status;

export const selectPerson = (state: RootState) =>
  selectPersonState(state).person;

export const selectCrew = (state: RootState) => selectPersonState(state).crew;

export const selectCast = (state: RootState) => selectPersonState(state).cast;

export default personSlice.reducer;
