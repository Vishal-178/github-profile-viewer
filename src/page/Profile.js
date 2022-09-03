import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserProfileHeading from "../component/UserProfileHeading";
import { data } from "../helper/profile";
import UserProfileData from "../component/UserProfileData";
import RepoCard from "../component/RepoCard";
import { repo } from "../helper/repositories";
import { Link } from "react-router-dom";
export default function Profile() {
  // profile data from helper/profile.js get by id from params
  const [profile, setProfile] = React.useState({});
  // pinedRepo data from helper/repositories.js get by id from params
  const [pinedRepo, setPinedRepo] = React.useState([]);
  // get id from url using useParams hook
  const { id } = useParams();
  useEffect(() => {
    // get profile data from helper/profile.js if id match
    const profile = data.find((profile) => profile.id == id);
    setProfile(profile);
    // get pinedRepo data from helper/repositories.js if id match
    // there is only one id in repo array so we use id as 1
    const pinedRepo = repo.find((user) => user.id == 1);
    setPinedRepo(pinedRepo.pinedRepo);
  }, [id]);

  return (
    <div
      className="container-fluid p-3 w-100 h-100"
      style={{ backgroundColor: "#eeeeee" }}
    >
      <div className="w-100 h-100" style={{ backgroundColor: "#ffffff" }}>
        {/*  profile heading component used in Profile page to show profile heading */}
        <div style={{ backgroundColor: "#f7f6f6" }}>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <div className="d-flex pt-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2099/2099238.png"
                alt="avatar"
                width="20"
                height="20"
                className="ms-4"
              />
              <p className="h6 ms-2 text-secondary">Back</p>
            </div>
          </Link>
          <UserProfileHeading name={profile.userName} handle={profile.handle} />
        </div>
        {/* profile data body display */}
        <div className="container-fluid pt-4">
          <UserProfileData
            bio={profile.bio}
            followers={profile.followers}
            repo={profile.repo}
            workAt={profile.workAt}
          />
          <div className="row">
            {pinedRepo.map((repo, index) => (
              <div className="col-12" key={index}>
                <RepoCard
                  userName={repo.userName}
                  repoName={repo.repoName}
                  description={repo.description}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
