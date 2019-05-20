import React, { Component } from "react";
import Link from "next/link";

import styled from "styled-components";

const CardStyles = styled.div`
  width: 80%;
  margin: 60px auto;
  border-radius: ${props => props.theme.rounded_border};
  box-shadow: ${props => props.theme.shadow};
  img {
    width: 100%;
    height: 150px;
    display: block;
    margin: 0 auto;
    border-radius: ${props => props.theme.rounded_border}
      ${props => props.theme.rounded_border} 0 0;
  }
  &.card-title {
    margin: 10px 0 0;
  }
`;

const CardDetailStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 5px 0 40px;
  .card-title {
    font-family: ${props => props.theme.fonts.font_family_bold};
    font-size: 1.2rem;
    margin: 10px 0;
  }
  .card-data {
    p {
      margin: 0;
      font-family: ${props => props.theme.fonts.font_family_light};
      span {
        font-weight: bold;
        font-family: ${props => props.theme.fonts.font_family_normal};
      }
    }
  }
`;

class Card extends Component {
  render() {
    const country = this.props.country;
    return (
      <CardStyles>
        <img src={country.flag} alt="ecuador" />
        <CardDetailStyles>
          <p className="card-title">
            <Link href={`country?callingCode=${country.callingCodes}`}>
              <a>{country.name}</a>
            </Link>
          </p>
          <div className="card-data">
            <p>
              <span>Population:</span> {country.population}
            </p>
            <p>
              <span>Region:</span> {country.region}
            </p>
            <p>
              <span>Capital:</span> {country.capital}
            </p>

            {this.props.children(country)}
          </div>
        </CardDetailStyles>
      </CardStyles>
    );
  }
}

export default Card;
