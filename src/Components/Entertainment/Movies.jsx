import { useEffect, useState } from "react";
import styles from "./Movies.module.css";

const Movies = ({ GenreSelection }) => {
  // State to store the fetched movies
  const [movies, setMovies] = useState([]);

  // Fetch movies based on the selected genre when the component mounts
  useEffect(() => {
    // API request headers
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "84d716def9mshfda12e4c205103ep172fcejsncd20c7a2ef26",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    // Function to fetch movies based on the selected genre
    const fetchMovies = async () => {
      try {
        // Make API request
        const response = await fetch(
          `https://moviesdatabase.p.rapidapi.com/titles?genre=${GenreSelection}&year=2020`,
          options
        );

        // Parse JSON response and set the movies state
        const data = await response.json();
        setMovies(data.results.splice(4, 4));
      } catch (err) {
        console.error(err);
      }
    };

    // Call the fetchMovies function
    fetchMovies();
  }, [GenreSelection]);

  return (
    <>
      {/* Display the selected genre */}
      <p className={styles.heading} style={{ overflowY: "hidden" }}>
        {GenreSelection}
      </p>
      {/* Display movie posters */}
      <div style={{ display: "flex", overflow: "hidden", marginLeft: "3vw", marginTop: "-35px" }}>
        {movies.map((movie, idx) => (
          <div key={idx} style={{ width: "20vw", margin: "1vw", marginTop: "vh" }}>
            {/* Display movie poster image */}
            <img
              src={movie?.primaryImage?.url}
              style={{
                objectFit: "cover",
                width: "18vw",
                height: "18vh",
                borderRadius: "12px",
                marginLeft: "4vh",
              }}
              alt={`Movie ${idx + 1}`}
            />
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Movies;
