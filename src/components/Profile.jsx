import { useState } from "react";
import Header from "./Header";

import "./Profile.css";

function Profile(props) {
  const [profileData, setProfileData] = useState(null);

  return (
    <div>
      <Header />
      <div className="profile-container">
        <p>To get your profile details: </p>
        <button>Click me</button>
        <div>
          <p>Profile name:</p>
          <p>About me: </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
