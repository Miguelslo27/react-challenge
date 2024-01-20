import { createSlice } from "@reduxjs/toolkit";

interface BreakingTitleSlice {
  title: {
    firstName: string;
    lastName: string;
  };
};

const initialState: BreakingTitleSlice = {
  title: {
    firstName: 'Breaking',
    lastName: 'Bad',
  },
};

const breakingTitleSlice = createSlice({
  name: "breakingTitle",
  initialState,
  reducers: {},
});

export default breakingTitleSlice.reducer;
