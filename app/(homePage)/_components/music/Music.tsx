import { songsModel } from "@/types/dataType";
import Image from "next/image";
import React from "react";
interface Props extends Omit<songsModel, "time" | "id"> {}
export const Music = ({ singer, albumName, image, songName }: Props) => {
  return (
    <div className="h-full space-y-2">
      <Image
        src={image}
        height={200}
        width={200}
        alt="artist-photo"
        className="rounded-md shadow-md"
      />
      <div>
        <h4 className="font-bold">{songName}</h4>
        <p className="text-sm text-caption">
          by ${singer} ,album {albumName}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam
          sint amet
        </p>
      </div>
    </div>
  );
};
