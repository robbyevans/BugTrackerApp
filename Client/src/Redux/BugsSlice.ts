import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Bug {
  id: number;
  description: string;
  resolved: boolean;
}

interface BugsState {
  list: Bug[];
  loading: boolean;
}

const initialState: BugsState = {
  list: [
    { id: 1, description: "Bug 1", resolved: true },
    { id: 2, description: "Bug 2", resolved: false },
    { id: 3, description: "Bug 3", resolved: false },
  ],
  loading: false,
};

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    addBug: (state, action: PayloadAction<{ description: string }>) => {
      state.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    resolveBug: (state, action: PayloadAction<{ id: number }>) => {
      const bugToResolve = state.list.find(
        (bug) => bug.id === action.payload.id
      );
      if (bugToResolve) {
        bugToResolve.resolved = true;
      }
    },
    deleteBug: (state, action: PayloadAction<{ id: number }>) => {
      state.list = state.list.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

export const { addBug, resolveBug, deleteBug } = slice.actions;
export default slice.reducer;
