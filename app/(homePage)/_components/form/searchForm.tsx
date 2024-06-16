"use client";
import { useAppDispatch } from "@/Redux/hooks";
import { updateSongsList } from "@/Redux/slicers/songs/songsSlicer";
import FormInput from "@/components/shared/textfiled";
import { songsModel } from "@/types/dataType";
import { filterList } from "@/utils/filterItems";
import React, { FormEvent } from "react";
interface Props {
  songsList: songsModel[] | any;
}
export const SearchForm = ({ songsList }: Props) => {
  const dispatch = useAppDispatch();
  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const filteredList = filterList(songsList, value);
    dispatch(updateSongsList(filteredList));
  };
  return (
    <form className=" mb-2">
      <FormInput
        name="search"
        placeholder="search ex: song name or album or singer"
        onChange={onChangeHandler}
      />
    </form>
  );
};
