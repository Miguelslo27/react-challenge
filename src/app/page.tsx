'use client';

import { useState } from "react";

import Breakify, { BrakingTitleType } from "@/components/Breakify/Breakify";
import BreakifyForm from "@/components/Breakify/BreakifyForm";
import StoreProvider from "@/components/StoreProvider/StoreProvider";

export default function Home() {
  const [title, setTitle] = useState<BrakingTitleType>();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

  const handleFirstNameChange = (name: string) => {
    setFirstName(name);
  };

  const handleLastNameChange = (name: string) => {
    setLastName(name);
  };

  const handleBreakifyClick = () => {
    setTitle({ firstName, lastName });
  };

  return (
    <StoreProvider>
      <Breakify /* title={title} */ />
      <BreakifyForm
        onFirstName={handleFirstNameChange}
        onLastName={handleLastNameChange}
        onBreakifySubmit={handleBreakifyClick}
      />
    </StoreProvider>
  );
};
