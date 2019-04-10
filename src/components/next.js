import React from "react";

const Next = props =>(
  <div>
  {props.date &&
    <div>
    <p className="st"> Tomorrow: {props.forecastFuture}</p>
    </div>
  }
  </div>
);
export default Next;
