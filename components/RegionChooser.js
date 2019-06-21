import React, { Component } from "react";
import RegionSelect from "../components/styled/RegionSelect";
import { countriesContext } from "../components/context/CountriesProvider";
import { appConfigContext } from "./context/AppConfigProvider";

class RegionChooser extends Component {
  static contextType = appConfigContext;
  setRegion = (e, context) => {
    context.changeRegion(e.target.value);
  };
  render() {
    return (
      <countriesContext.Consumer>
        {context => {
          return (
            <RegionSelect
              nightMode={this.context.state.nightMode}
              onChange={e => this.setRegion(e, context)}
            >
              <option value="Africa">Africa</option>
              <option value="Americas">América</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </RegionSelect>
          );
        }}
      </countriesContext.Consumer>
    );
  }
}

export default RegionChooser;
