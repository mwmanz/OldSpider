import React from "react";

const Cab = props => (
  <div className="cab">
{props.date &&
  <div>
  <p>publishedDate: {props.publishedDate}</p>
  <p>forecast: {props.forecastSummary}</p>
  <p>future foreacast: {props.forecastFuture}</p>
  </div>
}
  </div>
);
export default Cab;
