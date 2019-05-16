import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Autocomplete from "../components/Autocomplete";
import RegionChooser from "../components/RegionChooser";
import Countries from "../components/Countries";
import CountriesProvider from "../components/context/CountriesProvider";

class Index extends Component {
  /* static async getInitialProps() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();
    return { countries };
  } */

  render() {
    /* const countries = this.props.countries; */

    return (
      <>
        <CountriesProvider>
          <Autocomplete />
          <RegionChooser />
          <Countries />
        </CountriesProvider>
      </>
    );
  }
}

export default Index;
