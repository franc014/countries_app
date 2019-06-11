import React, { Component } from "react";
import Router from "next/router";
import SearchIcon from "../components/icons/Search";
import Search from "../components/styled/Search";
import DownShift, { resetIdCounter } from "downshift";
import debounce from "lodash.debounce";
import styled from "styled-components";

const ResulItemStyle = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;

class Autocomplete extends Component {
  state = {
    countries: []
  };
  redirectToDetail = selection => {
    Router.push({
      pathname: "/country",
      query: { callingCode: selection }
    });
  };

  findCountry = debounce(async e => {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${e.target.value}`
    );
    const countries = await res.json().catch(error => {
      console.log("not found");
    });

    this.setState({ countries });
  }, 350);

  render() {
    resetIdCounter();
    const countries = this.state.countries;

    return (
      <DownShift
        onChange={selection => this.redirectToDetail(selection.callingCodes)}
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
                  {...getInputProps({
                    onChange: e => {
                      e.persist();
                      this.findCountry(e);
                    }
                  })}
                />
                {countries && countries.length > 0 && (
                  <ul
                    className="result-list"
                    onChange={selection =>
                      this.redirectToDetail(selection.name)
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
                                      ? "rgba(0, 0, 0, 0.1)"
                                      : "white",
                                  fontWeight:
                                    selectedItem === country ? "bold" : "normal"
                                }
                              })}
                            >
                              <ResulItemStyle>
                                <img
                                  width="30"
                                  src={country.flag}
                                  alt={country.name}
                                />
                                {country.name}
                              </ResulItemStyle>
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
