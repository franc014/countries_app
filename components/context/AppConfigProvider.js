import React, { Component } from "react";

const appConfigContext = React.createContext();

class AppConfigProvider extends Component {
  state = {
    nightMode: true
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
