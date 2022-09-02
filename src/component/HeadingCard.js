import React from "react";
// this is Heading Card component used in Home page
export default function HeadingCard() {
  return (
    <div className="container ms-4 pt-5">
      <div className="d-flex align-items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="avatar"
          width="40"
          className="rounded-circle"
        />
        <p className="h2 ms-2 mt-3 text-secondary">GitHub Profile Viewer</p>
      </div>
      <div className="mt-3 mb-3"></div>
    </div>
  );
}
