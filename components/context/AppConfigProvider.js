import React, { Component } from "react";

const appConfigContext = React.createContext();

class AppConfigProvider extends Component {
  state = {
    nightMode: false
  };

  render() {
    return (
      <appConfigContext.Provider
        value={{
          state: this.state,
          changeVisualMode: isNight => {
            this.setState({ nightMode: isNight });
          }
        }}
      >
        {this.props.children}
      </appConfigContext.Provider>
    );
  }
}

export default AppConfigProvider;
export { appConfigContext };
