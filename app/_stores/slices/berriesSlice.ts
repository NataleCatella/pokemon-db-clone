import {createSlice} from "@reduxjs/toolkit";
import {Berry} from "@/app/_types/Berry";

interface BerriesListState {
  berries: Berry[];
}

const initialState = {
  berries: []
} as BerriesListState

const BerriesListSlice = createSlice({
  name: 'berries-list',
  initialState,
  reducers: {
    setBerries: (state, action) => {
      state.berries = action.payload;
    },
  }
})

export const {setBerries} = BerriesListSlice.actions;
export default BerriesListSlice.reducer;