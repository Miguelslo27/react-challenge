'use client';

import Breakify from "@/components/Breakify/Breakify";
import StoreProvider from "@/components/StoreProvider/StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
      <Breakify />
    </StoreProvider>
  );
};
