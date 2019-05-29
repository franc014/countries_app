import React, { Component } from "react";
import DownShift from "downshift";

class DropDown extends Component {
  render() {
    const countries = this.props.countries;
    return (
      <DownShift
        onChange={selection => console.log(`You selected ${selection.name}`)}
        itemToString={item => (item ? item.name : "")}
      >
        {({ inputValue, highlightedIndex, selectedItem, getItemProps }) => {
          return (
            <ul
              className="result-list"
              onChange={selection =>
                console.log(`You selected ${selection.name}`)
              }
            >
              {countries.map((country, i) => {
                return (
                  <li
                    {...getItemProps({
                      key: country.name,
                      index: i,
                      item: country,
                      style: {
                        backgroundColor:
                          highlightedIndex === i ? "lightgray" : "white",
                        fontWeight: selectedItem === country ? "bold" : "normal"
                      }
                    })}
                  >
                    {country.name}
                  </li>
                );
              })}
            </ul>
          );
        }}
      </DownShift>
    );
  }
}

export default DropDown;
