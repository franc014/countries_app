import React from "react";

import styled from "styled-components";
import MoonIcon from "./icons/MoonIcon";

const HeaderStyles = styled.header`
  box-shadow: ${props => props.theme.shadow};

  margin-bottom: 20px;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 0;
    padding: 20px 0;
    font-family: ${props => props.theme.fonts.font_family_bold};
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

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container header-wrapper">
        <p>Where in the world?</p>
        <div className="theme-switch">
          <MoonIcon />
          <p>Dark Mode</p>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
