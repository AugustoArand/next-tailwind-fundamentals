"use client";

import React, { useState } from "react";

export default function PositionDemo() {
  const [position, setPosition] = useState("static");

  return (
    <div className="max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">Demonstração: Static vs Relative</h2>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setPosition("static")}
          className={`px-4 py-2 rounded ${position === "static" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Static
        </button>
        <button
          onClick={() => setPosition("relative")}
          className={`px-4 py-2 rounded ${position === "relative" ? "bg-pink-600 text-white" : "bg-gray-200"}`}
        >
          Relative
        </button>
      </div>
      <div className="relative w-80 h-40 bg-gray-100 border rounded flex items-center justify-center">
        <div
          className={
            `w-28 h-28 flex items-center justify-center text-lg font-semibold transition-all duration-500 ` +
            (position === "static"
              ? "bg-blue-400 text-white"
              : "bg-pink-400 text-white relative top-8 left-8 shadow-lg")
          }
        >
          {position === "static" ? "Static" : "Relative"}
        </div>
      </div>
      <div className="mt-6">
        <p className="mb-2">
          <span className="font-bold">Static:</span> O elemento segue o fluxo normal da página, sem deslocamento especial.
        </p>
        <p>
          <span className="font-bold">Relative:</span> O elemento pode ser deslocado a partir de sua posição original usando as propriedades <code>top</code> e <code>left</code>. Note como ele se move no exemplo!
        </p>
      </div>
      <a
        href="https://tailwindcss.com/docs/position"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600 block mt-4"
      >
        Veja mais na documentação oficial do Tailwind
      </a>
    </div>
  );
}