import React, { Component } from "react";

const countriesContext = React.createContext();

class CountriesProvider extends Component {
  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const countries = await res.json();
    this.setState({ countries });
  }
  state = {
    region: null,
    countries: []
  };
  render() {
    return (
      <countriesContext.Provider
        value={{
          state: this.state,
          changeRegion: async region => {
            this.setState({ region });
            //todo debounce, and refactor
            const res = await fetch(
              `https://restcountries.eu/rest/v2/region/${region}`
            );
            const countries = await res.json();
            this.setState({ countries });
          }
        }}
      >
        {this.props.children}
      </countriesContext.Provider>
    );
  }
}

export default CountriesProvider;
export { countriesContext };
