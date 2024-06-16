import { songsModel } from "@/types/dataType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface songsSlicerModel {
  value: [] | songsModel[];
}

const initialState: songsSlicerModel = {
  value: [],
};

export const songsSlice = createSlice({
  name: "songSlice",
  initialState,
  reducers: {
    initialize: (state, actions: PayloadAction<songsModel[] | any>) => {
      state.value = actions.payload;
    },
    search: (state, actions: PayloadAction<string>) => {
      const filteredSongsList = state.value.filter((song) => {
        const query = song.albumName + song.singer + song.songName;
        return query.includes(actions.payload);
      });
      state.value = filteredSongsList;
    },
  },
});

export const { initialize, search } = songsSlice.actions;
export default songsSlice.reducer;
