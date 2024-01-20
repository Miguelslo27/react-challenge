'use client';

import { breakifyTitle, setTitle } from "@/stores/breakingTitleSlice";
import { RootState } from "@/stores/store";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

const BreakifyForm = () => {
  const title = useSelector((state: RootState) => state.breakingTitle);
  const dispatch = useDispatch();

  const handleFirstNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle({ ...title, firstName: ev.target.value }));
  };

  const handleLastNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle({ ...title, lastName: ev.target.value }));
  };

  const handleBreakifyClick = () => {
    dispatch(breakifyTitle());
  }

  return (
    <>
      <input type="text" name="firstName" onChange={handleFirstNameChange} />
      <input type="text" name="lastName" onChange={handleLastNameChange} />
      <button onClick={handleBreakifyClick}>Breakify</button>
    </>
  );
};

export default BreakifyForm;
