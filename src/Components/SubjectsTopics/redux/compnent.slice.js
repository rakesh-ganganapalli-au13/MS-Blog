import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subject: "",
  topic: "",
};

const componentSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    changeSubName: (state, action) => {
      state.subject = action.payload.subject;
    },
    changeTopicName: (state, action) => {
      state.topic = action.payload.topic;
    },
  },

  //   for api integration
  //   extraReducers :{

  //   }
});

const { actions, reducer } = componentSlice;
export const { changeSubName, changeTopicName } = actions;
export default reducer;

export const subjectSelector = (state) => state.subject;
