import React from "react";

function NextAndPreviousComponent() {
  return (
    <div className='navigation-path__navigate'>
      {" "}
      {"<"} <span>Предъидущий</span> | <span>Следующий</span> {">"}
    </div>
  );
}

export default NextAndPreviousComponent;
