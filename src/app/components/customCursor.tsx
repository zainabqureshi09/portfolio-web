"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx"; // Ensure you have `clsx` installed

// Cursor theme colors from CSS vars
const COLORS = {
  default: 'var(--cyber-green)',
  link: 'var(--cyber-cyan)',
  button: 'var(--cyber-orange)',
  heading: 'var(--cyber-purple)'
};

const CustomCursor = () => {
  // Cursor Position State
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // Interaction type for styling
  const [mode, setMode] = useState<'default'|'link'|'button'|'heading'>('default');
  // Click State
  const [clicked, setClicked] = useState(false);
  // Enable only on devices with fine pointer (non-touch)
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    setEnabled(media.matches);
    const handlePointerChange = (e: MediaQueryListEvent) => setEnabled(e.matches);
    media.addEventListener('change', handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const tag = el?.tagName?.toLowerCase();
      if (!tag) return setMode('default');
      if (tag === 'a') return setMode('link');
      if (tag === 'button' || el?.getAttribute('role') === 'button') return setMode('button');
      if (tag === 'h1' || tag === 'h2' || tag === 'h3') return setMode('heading');
      return setMode('default');
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      media.removeEventListener('change', handlePointerChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!enabled) return null;

  const color = COLORS[mode];
  const ringSize = mode === 'link' || mode === 'button' ? 36 : 28;
  const dotSize = mode === 'link' || mode === 'button' ? 6 : 4;

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{
          top: position.y,
          left: position.x,
          width: dotSize,
          height: dotSize,
          background: color,
          boxShadow: `0 0 10px ${color}55`,
        }}
        className={clsx(
          "fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-out duration-150 rounded-full",
        )}
      />

      {/* Outer Ring */}
      <div
        style={{
          top: position.y,
          left: position.x,
          width: ringSize,
          height: ringSize,
          borderColor: color,
          boxShadow: `0 0 20px ${color}33`,
        }}
        className={clsx(
          "fixed pointer-events-none transition-all -translate-x-1/2 -translate-y-1/2 z-50 ease-out duration-200 rounded-full border-2",
          clicked && "scale-90 opacity-80"
        )}
      />
    </>
  );
};

export default CustomCursor;
