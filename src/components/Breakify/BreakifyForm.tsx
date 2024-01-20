'use client';

import { ChangeEvent } from "react";

type BreakifyFormProps = {
  onFirstName: (value: string) => void;
  onLastName: (value: string) => void;
  onBreakifySubmit: () => void;
};

const BreakifyForm: React.FC<BreakifyFormProps> = ({ onFirstName, onLastName, onBreakifySubmit }) => {
  const handleFirstNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onFirstName(ev.target.value);
  };

  const handleLastNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onLastName(ev.target.value);
  };

  const handleBreakifyClick = () => {
    onBreakifySubmit();
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
