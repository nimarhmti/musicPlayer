import { BaseIcon } from "@/components/shared/Icons/BaseIcon";
import { songsModel } from "@/types/dataType";
import React from "react";
interface Props extends Omit<songsModel, "image"> {}
export const MusicItem = ({ albumName, id, singer, songName, time }: Props) => {
  return (
    <div
      className="border-t-2 border-caption px-2 py-4 flex items-center justify-between relative cursor-pointer hover:bg-highlight transition-colors duration-150 "
      id={id}
    >
      <span className="absolute bg-primary w-14 h-14 -left-16 rounded-full flex items-center justify-center">
        <BaseIcon name="lucide/play" className="h-[2rem] w-[2rem]" />
      </span>
      <div>
        <p className="text-lg text-mainText font-bold">{songName}</p>
        <p className="text-sm text-caption">{singer}</p>
      </div>
      <div className="w-14">
        <p className="text-mainText font-bold">{time}</p>
        <p className="text-sm text-caption">{albumName}</p>
      </div>
    </div>
  );
};
