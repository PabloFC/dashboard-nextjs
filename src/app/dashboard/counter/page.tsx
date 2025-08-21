"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
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
    </div>
  );
}
