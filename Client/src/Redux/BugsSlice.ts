import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Bug {
  id: number;
  description: string;
}

interface BugsState {
  list: Bug[];
  loading: boolean;
}

const initialState: BugsState = {
  list: [],
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
      });
    },
    updateBug: (
      state,
      action: PayloadAction<{ id: number; description: string }>
    ) => {
      const bugToUpdate = state.list.find(
        (bug) => bug.id === action.payload.id
      );
      if (bugToUpdate) {
        bugToUpdate.description = action.payload.description;
      }
    },
    deleteBug: (state, action: PayloadAction<{ id: number }>) => {
      state.list = state.list.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

export const { addBug, updateBug, deleteBug } = slice.actions;
export default slice.reducer;
