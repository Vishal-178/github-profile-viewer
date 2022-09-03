import React from "react";
// this is profile data card component used in Profile page to show profile data
export default function UserProfileData(props) {
  return (
    <div className="container ms-4 pt-4 pb-5">
      <div className="">
        <p className="h6 text-secondary">Bio</p>
        <p className="h6 ">{props.bio}</p>
      </div>

      <div className="pt-3">
        <p className="h6 text-secondary">Work At</p>
        <p className="h6 ">{props.workAt}</p>
      </div>

      <div className="d-flex pt-3">
        <div className="col-6">
          <p className="h6 text-secondary">Repositories</p>
          <p className="h6 ">{props.repo}</p>
        </div>
        <div className="col-6">
          <p className="h6 text-secondary">Followers</p>
          <p className="h6 ">{props.followers}</p>
        </div>
      </div>
      <p className="h6 text-secondary pt-3">Pinned Repositories</p>
    </div>
  );
}
