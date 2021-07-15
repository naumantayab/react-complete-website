import React, { useState } from "react";
import Sresult from './Sresult';
const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="search_bar">
        <input
          type="text"
          name="search"
          value={img}
          placeholder="search anything"
          onChange={inputEvent}
        />
      </div>
      {img === "" ? null : <Sresult name={img} />}
    </>
  );
};

export default Search;
