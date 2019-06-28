import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import styled from "styled-components";
import { appConfigContext } from "../components/context/AppConfigProvider";

const CountryPageStyles = styled.div`
  max-width: 400px;
  margin: 40px auto;
  @media (min-width: 600px) {
    max-width: 600px;
  }

  @media (min-width: 912px) {
    max-width: 1200px;
    margin: 40px auto;
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

  & .country-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    img {
      display: block;

      width: 350px;
      height: 280px;
      flex: 1 1 auto;
      margin: 0 auto;
      @media (min-width: 912px) {
        margin-right: 60px;
      }
    }
    & .country-info {
      padding: 20px;
      width: 50%;
      flex: 1 1 auto;
      /* width: 550px; */
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h1 {
        margin: 0;
        padding: 0;
        color: ${props =>
          props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
      }

      &-details {
        display: flex;
        justify-content: space-between;
        color: black;
        flex-wrap: wrap;

        p {
          line-height: 15px;
          color: ${props =>
            props.nightMode
              ? props.theme.colors.white
              : props.theme.colors.blue};
          font-family: ${props => props.theme.fonts.font_family_light};
          span {
            font-family: ${props => props.theme.fonts.font_family_normal};
          }
        }
        &-main-data {
          margin-right: 80px;
          flex: 1 1 auto;
        }

        &-add-data {
          flex: 1 1 auto;
        }
      }

      &-borders {
        p {
          color: ${props =>
            props.nightMode
              ? props.theme.colors.white
              : props.theme.colors.blue};
          line-height: 0;
        }
        .borders {
          display: flex;
          flex-wrap: wrap;
          .border {
            flex: 1 1 auto;
            border: 1px solid
              ${props =>
                !props.nightMode
                  ? props.theme.colors.gray_light
                  : props.theme.colors.blue_dark};
            margin-top: 10px;
            margin-right: 10px;
            background: ${props =>
              !props.nightMode
                ? props.theme.colors.white
                : props.theme.colors.blue};
            box-shadow: ${props => props.theme.shadow};
            padding: 0 5px;
            border-radius: 5px;
            text-align: center;
            color: ${props =>
              props.nightMode
                ? props.theme.colors.white
                : props.theme.colors.blue};
          }
        }
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
    const { country, borders } = this.props;

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

        <div className="country-card">
          {<img src={country.flag} alt={country.name} />}
          <div className="country-info">
            <h1>{country.name}</h1>
            <div className="country-info-details">
              <div className="country-info-details-main-data">
                <p>
                  <span>Native Name: </span> {country.nativeName}
                </p>
                <p>
                  <span>Population: </span> {country.population}
                </p>
                <p>
                  <span>Region: </span> {country.region}
                </p>
                <p>
                  <span>Subregion: </span> {country.subregion}
                </p>
                <p>
                  <span>Capital: </span> {country.capital}
                </p>
              </div>
              <div className="country-info-details-add-data">
                <p>
                  <span>Top Level Domain: </span> {country.topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {country.currencies.map((currency, i) => {
                    if (i == country.currencies.length - 1) {
                      return <span key={i}>{currency.name} </span>;
                    }
                    return <span key={i}>{currency.name}, </span>;
                  })}
                </p>
                <p>
                  <span>Languages: </span>
                  {country.languages.map((language, i) => {
                    if (i == country.languages.length - 1) {
                      return <span key={i}>{language.name} </span>;
                    }
                    return <span key={i}>{language.name}, </span>;
                  })}
                </p>
              </div>
            </div>
            {borders.length > 0 && (
              <div className="country-info-borders">
                <p>Border countries:</p>
                <div className="borders">
                  {borders.map((border, i) => {
                    return (
                      <Link
                        key={i}
                        href={`country?callingCode=${border.callingCodes}`}
                      >
                        <a className="border">{border.name}</a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </CountryPageStyles>
    );
  }
}

export default country;
