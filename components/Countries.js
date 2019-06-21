import React, { Component } from "react";
import Card from "./Card";
import { countriesContext } from "./context/CountriesProvider";
import styled from "styled-components";

const CountriesListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 20px;
`;

class Countries extends Component {
  renderCountries(countries) {
    return (
      <CountriesListStyle>
        {countries.map(country => {
          return (
            <Card key={country.name} country={country}>
              {() => {
                return (
                  <>
                    <p>
                      <span>Population:</span> {country.population}
                    </p>
                    <p>
                      <span>Region:</span> {country.region}
                    </p>
                    <p>
                      <span>Capital:</span> {country.capital}
                    </p>
                  </>
                );
              }}
            </Card>
          );
        })}
      </CountriesListStyle>
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
