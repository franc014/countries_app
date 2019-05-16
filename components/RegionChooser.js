import React, { Component } from "react";
import RegionSelect from "../components/styled/RegionSelect";
import { countriesContext } from "../components/context/CountriesProvider";

class RegionChooser extends Component {
  setRegion = (e, context) => {
    context.changeRegion(e.target.value);
  };
  render() {
    return (
      <countriesContext.Consumer>
        {context => {
          return (
            <RegionSelect onChange={e => this.setRegion(e, context)}>
              <option value="Americas">América</option>
              <option value="Africa">Africa</option>
            </RegionSelect>
          );
        }}
      </countriesContext.Consumer>
    );
  }
}

export default RegionChooser;
