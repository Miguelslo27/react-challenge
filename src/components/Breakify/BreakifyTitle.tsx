'use client';

import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";
import { useEffect } from "react";

const BreakifyTitle = () => {
  const title = useSelector((state: RootState) => state.breakingTitle);
  const classes = "breaking-bad-title text-center text-6xl";

  return (
    <>
      {title.breakified.loading
        ? <h1 className={classes}>Loading...</h1>
        : <h1 className={classes} dangerouslySetInnerHTML={{ __html: title.breakified.title }}></h1>
      }
    </>
  );
};

export default BreakifyTitle;
