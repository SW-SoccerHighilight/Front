import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
    }
  };
  return (
    <div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="동영상 검색"
          onKeyPress={onCheckEnter}
        />
      </div>
    </div>
  );
};

export default Search;
