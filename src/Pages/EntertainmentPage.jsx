import Movies from "../Components/Entertainment/Movies";
import Profile from "../assets/circleProfile.png";
import styles from "../Components/Entertainment/Movies.module.css";
import {useNavigate} from 'react-router-dom'

const EntertainmentPage = () => {
  // Retrieve values from localStorage
  const genres = JSON.parse(window.localStorage.getItem("Genres"));

  const navigate = useNavigate()

  const goNext = () => {
      navigate('/CategoryPage')
    
  };
  

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
        <button style={{ height: "40px", width: "145px", borderRadius: "20px", color: "white", backgroundColor: "green", border: "solid", borderColor: "black", fontSize: "1.1rem", fontFamily: "DM Sans", textAlign: "center", position:"relative", margin: "0vh 0 2vh 80vw"}} onClick={goNext}>Home Page</button>
      </div>

      
    </>
  );
};

export default EntertainmentPage;
