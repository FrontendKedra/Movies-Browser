// import { createSlice } from "@reduxjs/toolkit";

// const personDetails = createSlice({
//   name: "personDetails",
//   initialState: {
//     status: "loading",
//     person: [],
//   },
//   reducers: {
//     fetchPersonDetails: () => ({
//       status: "loading",
//       person: [],
//     }),
//     fetchPersonDetailsSuccess: (state, { payload: details }) => ({
//       status: "success",
//       person: [details],
//     }),
//     fetchPersonDetailsError: () => ({
//       status: "error",
//       person: [],
//     }),
//   },
// });

// export const {
//   fetchPersonDetails,
//   fetchPersonDetailsSuccess,
//   fetchPersonDetailsError,
// } = personDetails.actions;

// export const selectPersonState = (state) => state.personDetails;

// export const selectPersonStatuss = (state) => selectPersonState(state).status;

// export const selectPerson = (state) => selectPersonState(state).person;

// export default personDetails.reducer;
