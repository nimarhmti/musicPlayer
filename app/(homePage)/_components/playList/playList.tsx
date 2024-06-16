"use client";
import React from "react";
import { MusicItem } from "./musicItem";
import FormInput from "@/components/shared/textfiled";
import { useGetMusicsQuery } from "@/services/music/musicApiSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { initialize, search } from "@/Redux/slicers/songs/songsSlicer";
export const PlayList = () => {
  const { data, isLoading } = useGetMusicsQuery();
  const songItems = useAppSelector((state) => state.songsItems.value);
  const dispatch = useAppDispatch();
  if (isLoading) return <p>is loading....</p>;
  dispatch(initialize(data?.data));
  return (
    <div className="h-full pl-20 overflow-y-auto">
      <button onClick={() => dispatch(search("happy"))}>hi</button>
      {/* <FormInput value="text" className="mb-3 sticky top-0" name="Seacrh" /> */}
      {songItems?.map((song) => (
        <MusicItem
          albumName={song.albumName}
          id={song.id}
          singer={song.singer}
          songName={song.songName}
          time={song.time}
          key={song.id}
          image={song.image}
        />
      ))}
    </div>
  );
};
