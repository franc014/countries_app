import React, { Component } from "react";
import Link from "next/link";
import CountriesProvider, {
  countriesContext
} from "../components/context/CountriesProvider";
import { setTimeout } from "timers";

class country extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CountriesProvider>
        <Link href="/">
          <a>Back</a>
        </Link>
        <countriesContext.Consumer>
          {context => {
            setTimeout(() => {
              const { countryCode } = this.props.query;

              console.log(context, context.state.countries, countryCode);
            }, 200);

            /* const country = context.state.countries.find(country => {
              return country.numericCode === countryCode;
            });

            console.log("co", country); */

            return (
              <>
                <div>
                  <img src="" alt="Ecuador" />
                  <p>Ecuador</p>
                  <ul>
                    <li>Native Name: Ecuador</li>
                  </ul>
                  <p>Border Countries</p>
                  <Link href="/">
                    <a>Country 1</a>
                  </Link>
                </div>
              </>
            );
          }}
        </countriesContext.Consumer>
      </CountriesProvider>
    );
  }
}

export default country;
