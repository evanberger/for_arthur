import React from "react";
import ReactDOM from "react-dom";
import RatesMenu from "./components/rates_menu";
import ChillerMenu from "./components/chiller_menu";
import EconomicsMenu from "./components/economics_menu";
import CostsMenu from "./components/costs_menu";
import HoursMenu from "./components/hours_menu";

const App = () => {
  return (
    <div id="parent">
      <div className="col-lg-6">
        <p>---------</p>
        <RatesMenu />
        <ChillerMenu />
        <EconomicsMenu />
        <CostsMenu />
      </div>
      <div className="col-lg-6">
        <p>---------</p>
        <HoursMenu />
      </div>
    </div>
  )
}


// After Meteor loads in the browser, render the app to the DOM
Meteor.startup(() => {
 //React render call
 ReactDOM.render(<App />, document.querySelector(".container"));
});
