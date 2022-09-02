import React, { useEffect } from "react";
import ProfileCard from "../component/ProfileCard";
import HeadingCard from "../component/HeadingCard";
import Search from "../component/Search";
import { data } from "../helper/profile";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home() {
  // state to store profile data all the data is stored in helper/profile.js.
  const [profileData, setProfileData] = React.useState([]);
  // start is used to keep track of all the data displayed on the screen.
  // it is used to display next 3 data on the screen. for lazy loading.
  const [start, setStart] = React.useState(0);
  // when component mounts fetch data from helper/profile.js and store it in profileData state.
  useEffect(() => {
    if (data.length >= 10) {
      setProfileData(data.slice(0, 10));
      setStart(10);
    } else {
      setProfileData(data);
      setStart(data.length);
    }
  }, []);

  // fetch next 3 data from helper/profile.js and store it in profileData state.
  let fetchData = () => {
    setTimeout(() => {
      if (data.length >= start + 3) {
        setProfileData([...profileData, ...data.slice(start, start + 3)]);
        setStart(start + 3);
      } else {
        setProfileData([...profileData, ...data.slice(start, data.length)]);
        setStart(data.length);
      }
    }, 1500);
  };
  return (
    <div
      className="container-fluid p-3 w-100 h-100"
      style={{ backgroundColor: "#eeeeee" }}
    >
      <div className="w-100 h-100" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ backgroundColor: "#f7f6f6" }}>
          <HeadingCard />
          <Search />
        </div>
        <div className="container-fluid pt-4">
          {/* InfiniteScroll component is used to implement lazy loading */}
          <InfiniteScroll
            dataLength={profileData.length}
            next={fetchData}
            hasMore={data.length !== profileData.length}
            loader={<h4>Loading...</h4>}
          >
            <div className="row p-3">
              {/* map function is used to display all the profile data on the screen */}
              {profileData.map((profile) => (
                <div className="col-md-4 col-sm-6 col-12">
                  <ProfileCard
                    name={profile.userName}
                    description={profile.bio}
                    handle={profile.handle}
                    key={profile.id}
                    id={profile.id}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
