import { songsModel } from "@/types/dataType";

export const filterList = (list: songsModel[], actions: string) =>
  list.filter((song: songsModel) => {
    const query = (song?.albumName + song?.singer + song?.songName)
      .trim()
      .toLocaleLowerCase();
    return query.includes(actions.toLocaleLowerCase());
  });
