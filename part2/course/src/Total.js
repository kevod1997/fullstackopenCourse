import React from "react";

function Total({ course }) {
  const sum = course.parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>total of {sum} exercises</p>
    </div>
  );
}

export default Total;
