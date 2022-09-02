import React from "react";
import { Link } from "react-router-dom";
// Profile Card component used in Home page to show profile using map function
export default function ProfileCard(props) {
  return (
    <div className="card m-2" style={{ height: "130px", overflow: "hidden" }}>
      <Link
        to={`/profile/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="d-flex p-2">
          <div className="pe-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="avatar"
              width="50"
              className="rounded-circle"
            />
          </div>
          <div className="m-1">
            <h5 className="card-title">{props.name}</h5>
            <p
              className="card-text text-muted"
              style={{
                lineHeight: "1.5em",
                height: "4.5em",
                overflow: "hidden",
              }}
            >{`${props.handle} ${props.description}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
