import React, { Component } from "react";
import styled from "styled-components";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { appConfigContext } from "./context/AppConfigProvider";

const HeaderStyles = styled.header`
  box-shadow: ${props => props.theme.shadow};
  background: ${props =>
    !props.nightMode ? props.theme.colors.white : props.theme.colors.blue};

  margin-bottom: 20px;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .visual-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  p {
    margin: 0;
    padding: 20px 0;
    font-family: ${props => props.theme.fonts.font_family_bold};
    color: ${props =>
      props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
  }
  .theme-switch {
    display: flex;
    justify-content: space-between;

    align-items: center;
    p {
      margin-left: 5px;
      padding: 0 10px;
      font-family: ${props => props.theme.fonts.font_family_normal};
    }
  }
`;

class Header extends Component {
  static contextType = appConfigContext;

  toggleVisualMode = (e, context) => {
    context.changeVisualMode(!context.state.nightMode);
  };

  render() {
    return (
      <HeaderStyles nightMode={this.context.state.nightMode}>
        <div className="container header-wrapper">
          <p>Where in the world?</p>
          <div className="theme-switch">
            {this.context.state.nightMode ? (
              <div
                className="visual-toggle"
                onClick={e => {
                  this.toggleVisualMode(e, this.context);
                }}
              >
                <SunIcon />
                <p>Light Mode</p>
              </div>
            ) : (
              <div
                className="visual-toggle"
                onClick={e => {
                  this.toggleVisualMode(e, this.context);
                }}
              >
                <MoonIcon />
                <p>Night Mode</p>
              </div>
            )}
          </div>
        </div>
      </HeaderStyles>
    );
  }
}

export default Header;
