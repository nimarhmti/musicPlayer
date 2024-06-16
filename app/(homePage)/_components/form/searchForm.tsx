"use client";
import { useAppDispatch } from "@/Redux/hooks";
import { search } from "@/Redux/slicers/songs/songsSlicer";
import FormInput from "@/components/shared/textfiled";
import React, { FormEvent } from "react";

export const SearchForm = () => {
  const dispatch = useAppDispatch();
  const onChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch(search(value));
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
