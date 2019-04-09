import React from "react";

const Form = props => (
  <div>
  <form onSubmit={props.weatherMethod} >
  <button className="btn btn-secondary btn-lg">Weather</button>
  </form>
  <form onSubmit={props.clean}>
  <button className="btn btn-secondary btn-lg">Clear window</button>
  </form>
  </div>
);

export default Form;
