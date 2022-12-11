import React from "react";
import Part from "./Part";

function Content({ parts }) {

  return (
    <>
    <div>
        <Part parts={parts} />
    </div>
    </>
  );
}

export default Content;
