import {createSlice} from '@reduxjs/toolkit';

const patientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
  },
  reducers: {
    addPatient: (state, action) => {
      state.patients.push(action.payload);
    },
    setInitialPatients: (state, action) => {
      state.patients = action.payload;
    },
  },
});

export const {addPatient,setInitialPatients} = patientSlice.actions;
export default patientSlice.reducer;
