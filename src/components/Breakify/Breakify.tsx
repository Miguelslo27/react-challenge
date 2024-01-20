'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

const Breakify = () => {
  const title = useSelector((state: RootState) => state.breakingTitle);

  return (
    <>
      {title.breakified.loading
        ? <h1>Loading...</h1>
        : <h1 dangerouslySetInnerHTML={{ __html: title.breakified.title }}></h1>
      }
    </>
  );
};

export default Breakify;
