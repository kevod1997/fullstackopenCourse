import React from "react";

function Part({parts}) {

  return (
    <div>
{parts.map(part => (
  <p key={part.name}>
    {part.name} {part.exercises}
  </p>
))}
    </div>
  );
}

export default Part;
