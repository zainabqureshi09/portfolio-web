"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx"; // Ensure you have `clsx` installed

// Define cursor colors
const CURSOR_COLORS: Record<string, string> = {
  h1: "green-400",
  button: "orange-500",
  default: "blue-200", // Royal Blue Color
};

const CustomCursor = () => {
  // Cursor Position State
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Cursor Color State
  const [cursorColor, setCursorColor] = useState(CURSOR_COLORS.default);
  // Click State
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 800);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const tagName = (e.target as HTMLElement).tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS.default);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Small Inner Cursor */}
      <div
        style={{ top: position.y, left: position.x }}
        className={clsx(
          "fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-300 rounded-full w-3 h-3",
          `bg-${cursorColor}`
        )}
      />

      {/* Larger Outer Cursor */}
      <div
        style={{ top: position.y, left: position.x }}
        className={clsx(
          "fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-500 rounded-full w-8 h-8 border-2",
          `border-${cursorColor}`
        )}
      >
        {/* Click Effect */}
        <div
          className={clsx(
            "w-8 h-8 -translate-x-[1px] -translate-y-[1px] rounded-full ease-in transition-all duration-500 -z-10",
            clicked ? "scale-100 opacity-30" : "scale-0 opacity-0",
            `bg-${cursorColor}`
          )}
        />
      </div>
    </>
  );
};

export default CustomCursor;
