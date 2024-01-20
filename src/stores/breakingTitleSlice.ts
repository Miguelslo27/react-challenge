import { createSlice } from "@reduxjs/toolkit";

interface BreakingTitleSlice {
  firstName: string;
  lastName: string;
};

const initialState: BreakingTitleSlice = {
  firstName: 'Breaking',
  lastName: 'Bad',
};

const breakingTitleSlice = createSlice({
  name: "breakingTitle",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      return { ...state, firstName: action.payload };
    },
    setLastName: (state, action) => {
      return { ...state, lastName: action.payload };
    },
    setTitle: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default breakingTitleSlice.reducer;
export const { setFirstName, setLastName, setTitle } = breakingTitleSlice.actions;
