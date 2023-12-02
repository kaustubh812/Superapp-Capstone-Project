import React from "react";
import profile from "../../assets/profile.png"

// Profile component with user information and chip categories
const Profile = () => {
    // Retrieve user data and genre categories from local storage
    const userData = JSON.parse(window.localStorage.getItem("userInfo"));
    const Genre = JSON.parse(window.localStorage.getItem("Genres"));

    return (
        // Container for profile information
        <div
            style={{
                width: "40vw",
                height: "50vh",
                background: "#5746EA",
                borderRadius: "30px",
                padding: "6px",
                display: "flex",
                gap: "12px",
                position: "absolute", // Positioned absolute
                top: "10%", // Adjust top position
                left: "15%", // Adjust left position
            }}
        >
            {/* User profile image */}
            <div>
                <img
                    src={profile}
                    style={{
                        height: "45vh",
                        width: "10vw",
                        position: "relative",
                        top: "3.5vh",
                        left: "1vw"
                    }}
                />
            </div>

            {/* User information and chip categories */}
            <div style={{ display: "flex", flexDirection: "column", fontFamily: "DM sans" }}>
                {/* User name */}
                <p style={{ color: "white", fontSize: "1.5rem", fontWeight: "400", margin: "55px 35px 0px" }}>{userData.name}</p>

                {/* User email */}
                <p style={{ color: "white", fontSize: "1.5rem", fontWeight: "400", margin: "10px 35px 0px" }}>{userData.email}</p>

                {/* User username */}
                <p style={{ color: "white", fontSize: "3rem", margin: "1px 35px 0px" }}>{userData.username}</p>

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
        <div style={{ width: "35vw" }}>
            {/* Map through categories to create chip buttons */}
            {categories.map((category) => (
                <button
                    style={{
                        background: `${color}`,
                        borderRadius: "20px",
                        width: "150px",
                        color: "white",
                        border: "none",
                        padding: "6px",
                        height: "40px",
                        flexShrink: 0,
                        fontFamily: "DM sans",
                        margin: "40px 0px 0px 35px", // Adjust margin for spacing
                        fontSize: "1.1rem",
                        textAlign: "left",
                        paddingLeft: "1.4vw"
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
