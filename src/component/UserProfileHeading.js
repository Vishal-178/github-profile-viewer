import React from "react";
// profile heading component used in Profile page to show profile heading
export default function UserProfileHeading(props) {
  return (
    <div className="container ms-4 pt-5 pb-4">
      <div className="d-flex align-items-center ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/8013/8013505.png"
          alt="avatar"
          width="100"
        />
        <div>
          <p className="h2 ms-2 mt-3 text-secondary">{props.name}</p>
          <p className="h6 ms-2 mt-1 text-secondary">{props.handle}</p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
