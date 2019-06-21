import React, { Component } from "react";

import Autocomplete from "../components/Autocomplete";
import RegionChooser from "../components/RegionChooser";
import Countries from "../components/Countries";
import CountriesProvider from "../components/context/CountriesProvider";
import styled from "styled-components";

const SearchBarStyles = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

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
          <SearchBarStyles>
            <Autocomplete />
            <RegionChooser />
          </SearchBarStyles>

          <Countries />
        </CountriesProvider>
      </>
    );
  }
}

export default Index;
