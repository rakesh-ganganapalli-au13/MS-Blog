import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: "",
};

const componentSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    changeSubName: (state, action) => {
      state.subject = action.payload.subject;
    },
  },

  //   for api integration
  //   extraReducers :{

  //   }
});

const { actions, reducer } = componentSlice;
export const { changeSubName } = actions;
export default reducer;
