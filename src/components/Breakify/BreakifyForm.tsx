'use client';

import { breakifyTitle, setTitle } from "@/stores/breakingTitleSlice";
import { AppDispatch, RootState } from "@/stores/store";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BreakifyForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handleFirstNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFirstName(ev.target.value);
  };

  const handleLastNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setLastName(ev.target.value);
  };

  const handleBreakifyClick = () => {
    dispatch(setTitle({ firstName, lastName }));
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
