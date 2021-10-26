import React from "react";

export default function Button({
  cta,
  card,
  color,
  dark,
  light,
  children,
  size,
}) {
  const btnSize = size === "desk" ? "w-40" : size === "mobile" ? "w-24" : "";
  const colorbg = color === "pink" ? "text-darkPurple bg-pink" : "";

  return (
    <button
      className={`${btnSize}  ${cta} ${card} ${color} ${light} ${dark} w-full`}
    >
      {children}
    </button>
  );
}
