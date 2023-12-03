import React from "react";
import profile from "../../assets/profile.png";

// Profile component with user information and chip categories
const Profile = () => {
  // Retrieve user data and genre categories from local storage
  const userData = JSON.parse(window.localStorage.getItem("userInfo"));
  const Genre = JSON.parse(window.localStorage.getItem("Genres"));

  return (
    // Container for profile information
    <div
      style={{
        width: "32vw", // Decreased width by 20%
        height: "40vh", // Decreased height by 20%
        background: "#5746EA",
        borderRadius: "30px",
        padding: "6px",
        display: "flex",
        gap: "12px",
        position: "absolute", // Positioned absolute
        top: "1%", // Adjust top position
        left: "1%", // Adjust left position
      }}
    >
      {/* User profile image */}
      <div>
        <img
          src={profile}
          style={{
            height: "36vh", // Decreased height by 20%
            width: "8vw", // Decreased width by 20%
            position: "relative",
            top: "2.8vh", // Adjusted top position
            left: "0.8vw", // Adjusted left position
          }}
        />
      </div>

      {/* User information and chip categories */}
      <div style={{ display: "flex", flexDirection: "column", fontFamily: "DM sans" }}>
        {/* User name */}
        <p style={{ color: "white", fontSize: "1.2rem", fontWeight: "400", margin: "27px 28px 0px" }}>{userData.name}</p>

        {/* User email */}
        <p style={{ color: "white", fontSize: "1.2rem", fontWeight: "400", margin: "8px 28px 0px" }}>{userData.email}</p>

        {/* User username */}
        <p style={{ color: "white", fontSize: "2.4rem", margin: "0.8px 28px 0px" }}>{userData.username}</p>

        {/* Display chips with categories */}
        <Chips categories={Genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

// Chips component displaying category buttons
const Chips = ({ color, categories }) => {
  return (
    // Container for chip buttons
    <div style={{ width: "28vw" }}> {/* Decreased width by 20% */}
      {/* Map through categories to create chip buttons */}
      {categories.map((category, index) => (
        <button
          key={index}
          style={{
            background: `${color}`,
            borderRadius: "16px", // Decreased border radius
            width: "120px", // Decreased width by 20%
            color: "white",
            border: "none",
            padding: "6px",
            height: "32px", // Decreased height by 20%
            flexShrink: 0,
            fontFamily: "DM sans",
            margin: "32px 0px 0px 28px", // Adjust margin for spacing
            fontSize: "0.9rem", // Decreased font size
            textAlign: "left",
            paddingLeft: "1.12vw", // Adjusted padding left
          }}
        >
          {category}{" "} {/* Display category text */}
        </button>
      ))}
    </div>
  );
};

// Export the Profile component as the default export
export default Profile;
