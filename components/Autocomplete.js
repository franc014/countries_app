import React from "react";

import SearchIcon from "../components/icons/Search";
import Search from "../components/styled/Search";

const Autocomplete = () => {
  return (
    <Search>
      <SearchIcon />
      <input type="search" placeholder="Search for a country" />
    </Search>
  );
};

export default Autocomplete;
