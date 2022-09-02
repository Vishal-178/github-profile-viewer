import React from "react";
import "../css/search.css";
// Search component used in Home page to search profile
export default function Search() {
  return (
    <div className="container  ms-4 pt-4 pb-5">
      <div className="d-flex ">
        <div className="search-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
            alt="avatar"
            width="50"
            className="search-icon-img"
          />
        </div>
        <input type="search" className="search" placeholder="Search User" />
      </div>
    </div>
  );
}
