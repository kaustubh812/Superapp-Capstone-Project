// Importing Styles and images for different genres
import Styles from "./Genre.module.css";
import action from "../../assets/image2.png";
import drama from "../../assets/image3.png";
import romance from "../../assets/image4.png";
import thriller from "../../assets/image5.png";
import western from "../../assets/image6.png";
import horror from "../../assets/image7.png";
import fantasy from "../../assets/image8.png";
import music from "../../assets/image9.png";
import fiction from "../../assets/image10.png";
import warning from "../../assets/warning.png"
import Chips from "../Global/chips";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Array containing genre information like id, color, and image
const genres = [
  // Each genre has an id, color, and an image element
  // Image is a React element containing an img tag with specific styling
  // Colors are in hexadecimal format
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "150px", height: "90px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "150px", height: "90px" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "150px", height: "90px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "150px", height: "90px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "150px", height: "90px" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "150px", height: "90px" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "150px", height: "90px" }} src={fantasy} />,
  },


  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "150px", height: "90px" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "150px", height: "90px" }} src={fiction} />,
  },


];
// Functional component for the genre selection page
const Genre = () => {
  // State to manage selected categories and an error state for category length
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  // Navigation hook for moving to the next page
  const navigate = useNavigate();
  // Function to handle sign-up button click
  const handlenextButton = () => {
    // Check if at least 3 categories are selected, show error if not
    // If 3 or more categories are selected, save to local storage and navigate to the next page
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem("genres", JSON.stringify([...categories]));
      navigate("/browse");
    }
  };

  // Render the genre selection page
  return (
    <div className={Styles.body}>
      {/* Left side containing app heading, subheading, and category selection */}
      <div className={Styles.left}>
        <p className={Styles.heading}>Super app</p>
        <p className={Styles.subHeading}>Choose your entertainment category</p>
        <div style={{ marginTop: "10vh" }}>
          {/* Component to display and manage selected categories as chips */}
          <Chips
            categories={categories}
            color={"green"}
            setCategories={setCategories}
          />
          {/* Show error message if category length is less than 3 */}
          {lengthError ? (
            <p className={Styles.error}><img src={warning} alt="Warning Icon" style={{ width: "20px", height: "20px", marginRight: "5px" }} />Minimum 3 category required</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* Right side containing genre blocks */}
      <div className={Styles.right}>
        {/* Map through genres and render a Block component for each genre */}
        {genres.map((data, idx) => (
          <Block
            data={data}
            idx={idx}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      {/* Button to navigate to the next page */}
      <button className={Styles.nextButton} onClick={handlenextButton}>
        Next Page
      </button>
    </div>
  );
};

// Component for rendering a genre block
const Block = ({ data, idx, setCategories, categories }) => {
  // State to manage whether the block is selected
  const [selected, setSelected] = useState();

  // Function to handle block click and update selected categories
  const handleClick = (e) => {
    if (categories.includes(data.id)) {
      const index = categories.indexOf(data.id);
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  };
  // Effect to set the selected state based on whether the category is in the selected list
  useEffect(() => {
    setSelected(categories.includes(data.id) == true);
  });
  // Render the genre block
  return (
    <div
      data={data}
      onClick={(e) => handleClick(e)}
      key={idx}
      style={{
        // Styling for the genre block including background color, border, and margin
        background: data["color"],
        color: "white",
        padding: "11px",
        borderRadius: "12px",
        display: "flex",          
        flexDirection: "column",  
        alignItems: "flex-start",
        border: `${selected ? "4px solid green" : "4px solid transparent"}`,
        marginBottom: "10px"
      }}
    >
      {/* Display genre name and image inside the block */}
      <p style={{ margin: "0 0 20px", fontSize: "22px", fontFamily: "DM Sans"}}>{data.id}</p>
      {data.image}
    </div>
  );
};
export default Genre;
