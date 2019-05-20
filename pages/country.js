import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";

class country extends Component {
  static async fetchBorder(country_code) {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${country_code}`
    );
    const country = await res.json();
    return country;
  }

  static async getInitialProps(ctx) {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/callingcode/${ctx.query.callingCode}`
    );
    const countries = await res.json();

    const borders = await Promise.all(
      countries[0].borders.map(border => {
        return this.fetchBorder(border);
      })
    );

    return { country: countries[0], borders };
  }

  render() {
    /* const country = this.props.countries.shift();
    console.log(country, "in render...."); */
    const { country, borders } = this.props;

    //console.log(country);
    return (
      <>
        <Link href="/">
          <a>Back</a>
        </Link>

        <Card country={country}>
          {() => {
            return (
              <>
                <p>
                  <span>Top level domain:</span> {country.topLevelDomain}
                </p>
                <p>
                  <span>Subregion:</span> {country.subregion}
                </p>
                <p>
                  <span>Currencies:</span> {country.currencies[0].name}
                </p>
                <p>
                  <span>Subregion:</span> {country.subregion}
                </p>
                <p>
                  <span>Languages:</span> {country.languages[0].name}
                </p>
                <p>Border Countries</p>
                {borders.map(border => {
                  return (
                    <Link href="/" key={border.name}>
                      <a className="kk">{border.name}</a>
                    </Link>
                  );
                })}
              </>
            );
          }}
        </Card>
      </>
    );
  }
}

export default country;
