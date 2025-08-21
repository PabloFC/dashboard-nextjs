"use client";

import React, { useState } from "react";

const CartCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl text-white bg-gray-900 hover:bg-gray-600 transition-all w[100px] mr-2"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl text-white bg-gray-900 hover:bg-gray-600 transition-all w[100px] mr-2"
          onClick={() => setCount(count - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
};

export default CartCounter;
