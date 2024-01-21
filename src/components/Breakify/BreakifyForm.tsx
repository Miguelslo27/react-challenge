'use client';

import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/stores/store";
import { breakifyTitle, setTitle } from "@/stores/breakingTitleSlice";

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
      <div className="flex align-center justify-between">
        <div className="flex flex-col my-4 w-[48%]">
          <label htmlFor="firstName">First name</label>
          <input type="text" className="text-gray-900 p-2 my-2 rounded-md" name="firstName" onChange={handleFirstNameChange} />
        </div>
        <div className="flex flex-col my-4 w-[48%]">
          <label htmlFor="firstName">Last name</label>
          <input type="text" className="text-gray-900 p-2 my-2 rounded-md" name="lastName" onChange={handleLastNameChange} />
        </div>
      </div>
      <button className="bg-breaking-bad text-lg p-2 rounded-md" onClick={handleBreakifyClick}>Breakify</button>
    </>
  );
};

export default BreakifyForm;
