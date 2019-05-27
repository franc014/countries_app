import React, { Component } from "react";

import SearchIcon from "../components/icons/Search";
import Search from "../components/styled/Search";

class Autocomplete extends Component {
  state = {
    countries: []
  };
  findCountry = async e => {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${e.target.value}`
    );
    const countries = await res.json().catch(error => {
      console.log("not found");
    });

    this.setState({ countries });
  };
  render() {
    return (
      <Search>
        <SearchIcon />
        <input
          onChange={this.findCountry}
          type="search"
          placeholder="Search for a country"
        />
        {this.state.countries && (
          <ul className="result-list">
            {this.state.countries.map((country, i) => {
              return <li key={i}>{country.name}</li>;
            })}
          </ul>
        )}
      </Search>
    );
  }
}

export default Autocomplete;
