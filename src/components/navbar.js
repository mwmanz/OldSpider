import React from "react"
import Cab from "./cab";
import Form from "./form";

class Navbar extends React.Component {
  render(){
    return(



      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div>

  <a className="navbar-brand" href="/">Information App</a>
</div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li>
      <form onSubmit={this.props.clean}>
      <button className="btn btn-outline-success">Clean window </button>
      </form>
      </li>
    </ul>
  </div>
</nav>


    );
  }
}

export default Navbar;
