import React, { Component } from "react";

const appConfigContext = React.createContext();

const themeVariables = {
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

  rounded_border: ".25rem"
};

class AppConfigProvider extends Component {
  state = {
    nightMode: false,
    theme: {
      background_lighter: themeVariables.colors.blue,
      background: themeVariables.colors.white,
      color: themeVariables.colors.gray_dark,
      shadow: `0 2px 4px 0 rgba(0, 0, 0, 0.1)`
    }
  };
  render() {
    return (
      <appConfigContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </appConfigContext.Provider>
    );
  }
}

export default AppConfigProvider;
export { appConfigContext };
