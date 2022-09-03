import React from "react";
// this is repo card component used in Profile page
export default function RepoCard(props) {
  return (
    <div className="card ms-2 me-2 mb-3">
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
          <h6 className="card-title">{`${props.userName}/${props.repoName}`}</h6>
          <p className="card-text text-muted">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
