import React from "react";

export default function Title({ children, subtext }) {
  return (
    <div>
      <h1 className="text-4xl font-bold my-2 py-2 text-center">{children}</h1>
      <p>{subtext}</p>
    </div>
  );
}
