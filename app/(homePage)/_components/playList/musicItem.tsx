import React from "react";

export const MusicItem = () => {
  return (
    <div className="border-t-2 border-caption px-2 py-4 flex items-center justify-between relative cursor-pointer hover:bg-highlight transition-colors duration-150 ">
      <span className="absolute bg-primary w-16 h-16 -left-16 rounded-full" />
      <div>
        <p className="text-lg text-mainText font-bold">the loneliest</p>
        <p className="text-sm text-caption">Måneskin</p>
      </div>
      <div>
        <p className="text-mainText font-bold">4:22</p>
        <p className="text-sm text-caption">Rush</p>
      </div>
    </div>
  );
};
