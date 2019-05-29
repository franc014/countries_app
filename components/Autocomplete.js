import React, { Component } from "react";

import SearchIcon from "../components/icons/Search";
import Search from "../components/styled/Search";
import DownShift from "downshift";

class Autocomplete extends Component {
  state = {
    countries: []
  };
  findCountry = async e => {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${e.target.value}`
    );
    const countries = await res.json().catch(error => {
      console.log("not found");
    });

    this.setState({ countries });
  };
  render() {
    const countries = this.state.countries;
    console.log(countries);
    return (
      <DownShift
        onChange={selection => console.log(`You selected ${selection.name}`)}
        itemToString={item => (item ? item.name : "")}
      >
        {({
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          getItemProps,
          getInputProps,
          getMenuProps
        }) => {
          return (
            <div>
              <Search>
                <SearchIcon />

                <input
                  type="search"
                  placeholder="Search for a country"
                  {...getInputProps({ onChange: this.findCountry })}
                />
                {countries && (
                  <ul
                    className="result-list"
                    onChange={selection =>
                      console.log(`You selected ${selection.name}`)
                    }
                    {...getMenuProps()}
                  >
                    {isOpen
                      ? countries.map((country, index) => {
                          return (
                            <li
                              {...getItemProps({
                                key: country.name,
                                index,
                                item: country,
                                style: {
                                  backgroundColor:
                                    highlightedIndex === index
                                      ? "lightgray"
                                      : "white",
                                  fontWeight:
                                    selectedItem === country ? "bold" : "normal"
                                }
                              })}
                            >
                              {country.name}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                )}
              </Search>
            </div>
          );
        }}
      </DownShift>
    );
  }
}

export default Autocomplete;
