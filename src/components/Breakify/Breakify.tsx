'use client';

import { RootState } from "@/stores/store";
import { useSelector } from "react-redux";

const Breakify = () => {
  const title = useSelector((state: RootState) => state.breakingTitle);

  return (
    <h1 dangerouslySetInnerHTML={{ __html: title.breakified }}></h1>
  );
};

export default Breakify;
