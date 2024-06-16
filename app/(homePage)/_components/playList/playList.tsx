"use client";
import React from "react";
import { MusicItem } from "./musicItem";
import FormInput from "@/components/shared/textfiled";
import { useGetMusicsQuery } from "@/services/music/musicApiSlice";
export const PlayList = () => {
  const { data, isLoading } = useGetMusicsQuery();
  if (isLoading) return <p>is loading....</p>;
  const songs = data?.data;
  return (
    <div className="h-full pl-20 overflow-y-auto">
      {/* <FormInput value="text" className="mb-3 sticky top-0" name="Seacrh" /> */}
      {songs?.map((song) => (
        <MusicItem
          albumName={song.albumName}
          id={song.id}
          singer={song.singer}
          songName={song.songName}
          time={song.time}
          key={song.id}
        />
      ))}
      {/* <MusicItem />
      <MusicItem />
      <MusicItem />
      <MusicItem /> */}
    </div>
  );
};
