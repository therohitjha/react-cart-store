import React, { Fragment, useContext } from "react";
import { HeaderContext } from "./Header";
export default function Search() {
  const [toggle,setToggle,handleOnChange,search] = useContext(HeaderContext);

  return (
    <Fragment>
      {toggle && (
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={search}
          onChange={handleOnChange}
        />
      )}
      <i class="fas fa-search" onClick={setToggle}></i>
    </Fragment>
  );
}
