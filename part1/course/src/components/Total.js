import React from "react";

function Total({course}) {
  const { parts: courseParts } = course;
  return (
    <div>
      <p>Number of exercises {courseParts[0].exercises + courseParts[1].exercises + courseParts[2].exercises}</p>
    </div>
  );
}

export default Total;
