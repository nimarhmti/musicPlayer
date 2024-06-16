"use client";
import React, { useEffect } from "react";
import { MusicItem } from "./musicItem";
import { useGetMusicsQuery } from "@/services/music/musicApiSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { initialize } from "@/Redux/slicers/songs/songsSlicer";
import { SearchForm } from "../form/searchForm";
export const PlayList = () => {
  const { data, isLoading } = useGetMusicsQuery();
  const songItems = useAppSelector((state) => state.songsItems.songList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initialize(data?.data));
  }, [data]);
  if (isLoading) return <p>is loading....</p>;
  return (
    <div className="h-full pl-20 overflow-y-auto">
      <SearchForm songsList={data?.data} />
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
