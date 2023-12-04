import React from "react";
import profile from "../../assets/profile.png";

// Profile component to display user information
const Profile = () => {
  // Retrieve user data and genres from local storage
  const userData = JSON.parse(window.localStorage.getItem("userInfo"));
  const Genre = JSON.parse(window.localStorage.getItem("Genres"));

  return (
    <div
      style={{
        width: "25.6vw",
        height: "32vh",
        background: "#5746EA",
        borderRadius: "24px",
        padding: "4.8px",
        display: "flex",
        gap: "9.6px",
        position: "absolute",
        top: "6%",
        left: "13%",
      }}
    >
      {/* User profile image */}
      <div>
        <img
          src={profile}
          style={{
            height: "28.8vh",
            width: "6.4vw",
            position: "relative",
            top: "2.24vh",
            left: "0.64vw",
          }}
          alt="Profile"
        />
      </div>

      {/* User information and genre chips */}
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "DM sans" }}>
        <p style={{ color: "white", fontSize: "0.96rem", fontWeight: "400", margin: "21.6px 22.4px 0px" }}>{userData.name}</p>
        <p style={{ color: "white", fontSize: "0.96rem", fontWeight: "400", margin: "6.4px 22.4px 0px" }}>{userData.email}</p>
        <p style={{ color: "white", fontSize: "1.92rem", margin: "0.64px 22.4px 0px" }}>{userData.username}</p>
        {/* Genre chips */}
        <Chips categories={Genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

// Chips component to display genre categories
const Chips = ({ color, categories }) => {
  return (
    <div style={{ width: "22.4vw" }}>
      {categories.map((category, index) => (
        <button
          key={index}
          style={{
            background: `${color}`,
            borderRadius: "12.8px",
            width: "72px",
            color: "white",
            border: "none",
            padding: "4.8px",
            height: "25px",
            flexShrink: 0,
            fontFamily: "DM sans",
            margin: "15px 0px 0px 18px",
            fontSize: "0.8rem",
            textAlign: "left",
            paddingLeft: "0.896vw",
          }}
        >
          {category}{" "}
        </button>
      ))}
    </div>
  );
};

export default Profile;
