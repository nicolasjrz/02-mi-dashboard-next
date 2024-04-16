"use client";

import { useState } from "react";

export const CartCunter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span className="text-9xl text-violet-800">{counter}</span>
      <div className="flex items-center justify-between  w-50 p-2  ">
        <button onClick={() => setCounter(counter - 1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-300 text-white hover:bg-violet-300 w-[117px] mr-2">
          -1
        </button>
        <button onClick={() => setCounter(counter + 1)} className="flex items-center justify-center p-2 rounded-xl bg-gray-300 text-white hover:bg-violet-300 w-[117px]">
          +1
        </button>
      </div>
    </>
  );
};
