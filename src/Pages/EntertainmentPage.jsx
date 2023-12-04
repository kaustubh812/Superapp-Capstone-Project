import Movies from "../Components/Entertainment/Movies";
import Profile from "../assets/circleProfile.png";
import styles from "../Components/Entertainment/Movies.module.css";

const EntertainmentPage = () => {
  // Retrieve values from localStorage
  const genres = JSON.parse(window.localStorage.getItem("Genres"));

  return (
    <>
      {/* Main container styling */}
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
        }}
      >
        {/* User profile image */}
        <img
          src={Profile}
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "60px",
            width: "60px",
          }}
        />

        {/* Super app title */}
        <p
          style={{
            color: "#72DB73",
            fontSize: "3rem",
            margin: "1vw",
            marginLeft: "60px",
            marginBottom: "40px",
          }}
          className={styles.header}  // Apply header styles from the CSS module
        >
          Super app
        </p>

        {/* Subtitle */}
        <p style={{ color: "white", fontSize: "25px", marginLeft: "6vw", marginTop: "-1vh", fontFamily: "roboto" }}>
          Entertainment according to your choice
        </p>

        {/* Render Movies component for each genre */}
        {genres.map((genre) => (
          <Movies GenreSelection={genre} key={genre} />
        ))}
      </div>
    </>
  );
};

export default EntertainmentPage;
