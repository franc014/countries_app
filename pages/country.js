import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Card from "../components/Card";
import styled from "styled-components";
import { appConfigContext } from "../components/context/AppConfigProvider";

const CountryPageStyles = styled.div`
  max-width: 400px;
  margin: 40px auto;
  @media (min-width: 700px) {
    max-width: 600px;
  }
  .back-btn {
    background: ${props =>
      props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.gray_light};
    display: flex;
    padding: 3px 8px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    width: 100px;
    cursor: pointer;
    margin: 40px 0;
    svg {
      fill: ${props =>
        !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
    }
    a {
      margin-left: 10px;
      color: ${props =>
        !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
    }
    box-shadow: ${props => props.theme.shadow};
  }

  & .aditional-data {
    margin-top: 40px;
    .border-section {
      p {
        font-family: ${props => props.theme.fonts.font_family_bold};
      }
      margin: 40px 0 0;
    }
    .border-list {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .border {
        background: ${props =>
          props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
        flex: 1 1 auto;
        margin: 5px 5px;
        border: 1px solid ${props => props.theme.colors.gray_light};
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
        box-shadow: ${props => props.theme.shadow};
        color: ${props =>
          !props.nightMode
            ? props.theme.colors.blue
            : props.theme.colors.white};
      }
    }
  }
`;

class country extends Component {
  static contextType = appConfigContext;
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
      <CountryPageStyles nightMode={this.context.state.nightMode}>
        <Link href="/">
          <div className="back-btn">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
            >
              <title>arrow-left2</title>
              <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z" />
            </svg>
            <a>Back</a>
          </div>
        </Link>

        <Card country={country}>
          {() => {
            return (
              <>
                <div className="main-data">
                  <p>
                    <span>Population:</span> {country.population}
                  </p>
                  <p>
                    <span>Region:</span> {country.region}
                  </p>
                  <p>
                    <span>Subregion:</span> {country.subregion}
                  </p>
                  <p>
                    <span>Capital:</span> {country.capital}
                  </p>
                </div>
                <div className="aditional-data">
                  <p>
                    <span>Top level domain:</span> {country.topLevelDomain}
                  </p>

                  <p>
                    <span>Currencies:</span> {country.currencies[0].name}
                  </p>

                  <p>
                    <span>Languages: </span>

                    {country.languages.map((lan, i) => {
                      if (i === country.languages.length - 1) {
                        return <span key={lan.name}>{lan.name} </span>;
                      }
                      return <span key={lan.name}>{lan.name}, </span>;
                    })}
                  </p>
                  {borders.length > 0 && (
                    <div className="border-section">
                      <p>Border Countries</p>
                      <div className="border-list">
                        {borders.map(border => {
                          return (
                            <Link
                              key={border.name}
                              href={`country?callingCode=${
                                border.callingCodes
                              }`}
                            >
                              <a className="border">{border.name}</a>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          }}
        </Card>
      </CountryPageStyles>
    );
  }
}

export default country;
