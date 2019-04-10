import React from "react";

const Bike = props => (
  <div className="bk col-md-2">
  <form  className="bikeForm " onSubmit={props.bikeMethod}>
  <input type="text" className="place" placeholder="Place" />
  <button className="btn btn-outline-success">Show bike point</button>
  </form>
  </div>
);

export default Bike;
