'use client';

import BreakifyTitle from "./BreakifyTitle";
import BreakifyForm from "./BreakifyForm";

const Breakify = () => {
  return (
    <div className="container w-1/3 my-8 mx-auto flex flex-col align-center justify-center">
      <BreakifyTitle />
      <BreakifyForm />
    </div>
  );
};

export default Breakify;
