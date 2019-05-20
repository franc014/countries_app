import React, { Component } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Header from "./Header";

const theme = {
  fonts: {
    font_size_list: "14px",
    font_size_detail: "16px",
    font_family_normal: "nunito_sans_600",
    font_family_light: "nunito_sans_300",
    font_family_bold: "nunito_sans_800"
  },
  colors: {
    blue: "hsl(209, 23%, 22%)",
    blue_dark: "hsl(207, 26%, 17%)",
    blue_dark2: "hsl(200, 15%, 8%)",
    gray_dark: "hsl(0, 0%, 52%)",
    gray_dark_lighter: "hsl(0, 0%, 98%)",
    gray_light: "rgba(0, 0, 0, 0.1)",
    white: "hsl(0, 0%, 100%)"
  },
  spaces: {},
  shadow: `0 2px 4px 0 rgba(0, 0, 0, 0.1)`,
  rounded_border: ".25rem"
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'nunito_sans_300';
    src: url('/static/NunitoSans-Light.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nunito_sans_600';
    src: url('/static/NunitoSans-SemiBold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'nunito_sans_800';
    src: url('/static/NunitoSans-ExtraBold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
html{
  box-sizing:border-box;
  font-size:${theme.font_size_body}; /*base font*/
  *,*:before,*:after{
    box-sizing:inherit;
  }
  body{
    background:${theme.colors.white};
    margin:0;
    padding:0;
    font-size:1rem; /*1.5rem from the base font: 10px*/
    line-height:2;
    font-family:${theme.fonts.font_family_normal}
  }
   a {
    text-decoration: none;
    color: ${
      theme.black
    }; /*can not access props, instead we have to use the theme object directly*/
  }

  .kk{
    margin-left:20px;
  }

 
}
.container {
  width:90%;
  margin:0 auto;
  
}

`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <main className="container">{this.props.children}</main>
        </>
      </ThemeProvider>
    );
  }
}

export default Layout;
