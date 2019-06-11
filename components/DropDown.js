import React, { Component } from "react";
import Router from "next/router";
import DownShift from "downshift";

class DropDown extends Component {
  redirectToDetail(selection) {
    Router.push({
      pathname: "/country",
      query: { name: selection }
    });
  }
  render() {
    const countries = this.props.countries;
    return (
      <DownShift
        onChange={selection => this.redirectToDetail(selection)}
        itemToString={item => (item ? item.name : "")}
      >
        {({ inputValue, highlightedIndex, selectedItem, getItemProps }) => {
          return (
            <ul
              className="result-list"
              onChange={selection => this.redirectToDetail(selection)}
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
