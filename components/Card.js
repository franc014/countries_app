import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { appConfigContext } from "./context/AppConfigProvider";

const CardStyles = styled.div`
  margin: 20px auto;
  border-radius: ${props => props.theme.rounded_border};
  box-shadow: ${props => props.theme.shadow};
  background: ${props =>
    !props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
  img {
    width: 100%;
    height: 200px;
    display: block;
    margin: 0 auto;
    border-radius: ${props => props.theme.rounded_border}
      ${props => props.theme.rounded_border} 0 0;
    @media (min-width: 700px) {
      height: 250px;
    }
  }
  & .card-title {
    margin: 10px 0 0;
    & > a {
      color: ${props =>
        !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
      &:hover {
        color: ${props => props.theme.colors.gray_dark};
      }
    }
  }
`;

const CardDetailStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 5px 0 40px;
  background: ${props =>
    !props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
  color: ${props =>
    !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
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
  static contextType = appConfigContext;
  render() {
    const country = this.props.country;
    return (
      <CardStyles nightMode={this.context.state.nightMode}>
        {<img src={country.flag} alt={country.name} />}
        <CardDetailStyles nightMode={this.context.state.nightMode}>
          <p className="card-title">
            <Link href={`country?callingCode=${country.callingCodes}`}>
              <a>{country.name}</a>
            </Link>
          </p>
          <div className="card-data">{this.props.children(country)}</div>
        </CardDetailStyles>
      </CardStyles>
    );
  }
}

export default Card;
