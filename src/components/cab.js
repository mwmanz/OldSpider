import React from "react";

const Cab = props => (
  <div className="cab">
{props.date &&
  <div>
  <p className="st">today: {props.forecastSummary}</p>
  <p className="st">tomorrow: {props.forecastFuture}</p>
  </div>
}
  </div>
);
export default Cab;
