"use client";
import { useAppSelector } from "@/Redux/hooks";
import { isEmptyObject } from "@/utils/objectCheker";
import Image from "next/image";
import React from "react";
export const Music = () => {
  const currentSong = useAppSelector((state) => state.songsItems.currentSong);
  if (isEmptyObject(currentSong))
    return (
      <h3 className="text-mainText font-bold">
        lets choose a Song to show details!
      </h3>
    );
  return (
    <div className="h-full space-y-2">
      <Image
        src={currentSong.image}
        height={200}
        width={200}
        alt="artist-photo"
        className="rounded-md shadow-md"
      />
      <div>
        <h4 className="font-bold">{currentSong.songName}</h4>
        <p className="text-sm text-caption">
          by {currentSong.singer} ,album {currentSong.albumName}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam
          sint amet
        </p>
      </div>
    </div>
  );
};
