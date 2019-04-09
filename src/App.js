import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Cab from "./components/cab";

const Api_key = "ef1650c0b7f9d80494144db9a6d5713d";
const app_id = "d520140b";

class App extends React.Component {

  state = {
updatePeriod: undefined,
forecastSummary: undefined,
forecastFuture: undefined,
forecastText: undefined,
date: undefined,
publishedDate: undefined
  }

gettingWeather = async (event) => {

  event.preventDefault();
  const api_url = await fetch(`https://api.tfl.gov.uk/AirQuality?app_key=${Api_key}&app_id=${app_id}`);
  const data = await api_url.json();
  console.log(data);

  this.setState({
  updatePeriod: data.updatePeriod,
  forecastSummary: data.currentForecast[0].forecastSummary,
  forecastText: data.currentForecast[0].forecastText,
  date: data.currentForecast[0].fromDate,
  publishedDate: data.currentForecast[0].publishedDate,
  forecastFuture: data.currentForecast[1].forecastSummary
  });
}

clean = async (e) => {
  document.getElementById('root').innerHTML="";
}
  render(){
    return(
      <div>
      <div className="wrapper">
      <div className="main">
<div className="container">
<div className="row">
<div className="col-sm-5 info ">
<Info />
</div>
<div className="col-sm-7 form">
<Form weatherMethod={this.gettingWeather} />
<Cab
updatePeriod={this.state.updatePeriod}
forecastSummary={this.state.forecastSummary}
forecastText={this.state.forecastText}
date={this.state.date}
publishedDate={this.state.publishedDate}
forecastFuture={this.state.forecastFuture}
/>
</div>
</div>
  </div>
      </div>
      </div>
</div>
    );
  }
}

export default App;
