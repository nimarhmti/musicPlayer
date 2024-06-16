import { songsModel } from "@/types/dataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Omit<songsModel, "time"> | any = {
  value: {},
};

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    addCurrentSong: (state, actions: PayloadAction<songsModel | any>) => {
      state.value = actions.payload;
    },
  },
});

export const { addCurrentSong } = currentSongSlice.actions;
export default currentSongSlice.reducer;
