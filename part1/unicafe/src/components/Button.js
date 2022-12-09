import React from "react";

function Button({addGood,addNeutral,addBad}) {
  return (
    <div>
      <button onClick={() => addGood()}> good </button>
      <button onClick={() => addNeutral()}> neutral </button>
      <button onClick={() => addBad()}> bad </button>
    </div>
  );
}

export default Button;
