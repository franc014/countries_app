import React, { Component } from "react";
import Link from "next/link";
/* import fetch from "isomorphic-unfetch"; */
import fetch from "isomorphic-unfetch";

class country extends Component {
  static async getInitialProps(ctx) {
    console.log(ctx.query.callingCode);
    // eslint-disable-next-line no-undef
    const res = await fetch(
      `https://restcountries.eu/rest/v2/callingcode/${ctx.query.callingCode}`
    );
    const countries = await res.json();
    console.log(countries[0]);

    return { country: countries[0] };
  }
  /* const res = await fetch(
      `https://restcountries.eu/rest/v2/callingcode/${ctx.query.callingCode}`
    );
    const countries = await res.json(); */
  /* const res = await fetch(
      `https://restcountries.eu/rest/v2/callingcode/${callingCode}`
    );
    const country = await res.json();
    return { country }; */
  //this.setState({ country });
  //return { countries };

  render() {
    /* const country = this.props.countries.shift();
    console.log(country, "in render...."); */
    const country = this.props.country;
    //console.log(country);
    return (
      <>
        <Link href="/">
          <a>Back</a>
        </Link>

        <div>
          <img src="" alt="" />

          <ul>
            <li>Native Name: {country.name}</li>
          </ul>
          <p>Border Countries</p>
          <Link href="/">
            <a>Country 1</a>
          </Link>
        </div>
      </>
    );
  }
}

export default country;
