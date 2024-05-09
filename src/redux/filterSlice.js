import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
      prepare(name) {
        return {
          payload: name,
        };
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
