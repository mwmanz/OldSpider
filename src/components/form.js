import React from "react";

const Form = props => (
  <div>
  <form onSubmit={props.weatherMethod} >
  <button className="btn btn-outline-success">weather</button>
  </form>
  </div>
);

export default Form;
