import React from "react";
import { Input } from "../ui/input";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <Input
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        type="search"
        placeholder="Search movies..."
        className="w-full rounded-full bg-black px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 text-white"
      />
    </div>
  );
};

export default SearchBox;
