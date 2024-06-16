import { songsModel } from "@/types/dataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface songsSlicerModel {
  songList: [] | songsModel[];
  currentSong: Omit<songsModel, "time"> | any;
}

const initialState: songsSlicerModel = {
  songList: [],
  currentSong: {},
};

export const songsSlice = createSlice({
  name: "songSlice",
  initialState,
  reducers: {
    initialize: (state, actions: PayloadAction<songsModel[] | any>) => {
      state.songList = actions.payload;
    },

    updateSongsList: (state, actions: PayloadAction<songsModel[] | any>) => {
      state.songList = actions.payload;
    },
    addCurrentSong: (state, actions: PayloadAction<songsModel | any>) => {
      state.currentSong = actions.payload;
    },
  },
});

export const { initialize, updateSongsList, addCurrentSong } =
  songsSlice.actions;
export default songsSlice.reducer;
