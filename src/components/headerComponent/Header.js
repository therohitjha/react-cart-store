import React, { useState, createContext } from "react";
import HeaderUI from "./HeaderUI";

export const HeaderContext = createContext();

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(null);

  const handleOnChange = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  return (
    <HeaderContext.Provider
      value={[
        toggle,
        () => setToggle(!toggle),
        (event) => handleOnChange(event),
        search
      ]}
    >
      <HeaderUI />
    </HeaderContext.Provider>
  );
}
