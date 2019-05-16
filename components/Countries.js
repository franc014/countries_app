import React, { Component } from "react";
import Card from "./Card";
import { countriesContext } from "./context/CountriesProvider";

/* {countries.map(country => {
            return <Card key={country.name} country={country} />;
          })} */
class Countries extends Component {
  renderCountries(countries) {
    return (
      <>
        {countries.map(country => {
          return <Card key={country.name} country={country} />;
        })}
      </>
    );
  }
  render() {
    return (
      <countriesContext.Consumer>
        {context => {
          if (context.state.countries.length == 0)
            return <p>no data available</p>;
          return this.renderCountries(context.state.countries);
        }}
      </countriesContext.Consumer>
    );
  }
}

export default Countries;
