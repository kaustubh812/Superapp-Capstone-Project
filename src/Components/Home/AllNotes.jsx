import { useState } from "react";

// Component for displaying and managing notes
const AllNotes = () => {
  // State to store and update the text content of the textarea from local storage
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );

  // Function to handle changes in the textarea and update the state and local storage
  const handleChange = (e) => {
    setText(e.target.value); // Update the state with new text value
    window.localStorage.setItem("text", JSON.stringify(text)); // Update text in local storage
  };

  // Render the notes component
  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "51vh",
        width: "21.6vw",
        margin: "6vh 0 0 41.8vw",
        position: "relative",
        borderRadius: "9.6px",
        padding: "20px",
      }}
    >
      {/* Heading for the notes section */}
      <p style={{ color: "black", fontSize: "1.6rem", margin: "0 0 1.5vh 0.6vw", fontFamily: "roboto" }}>All notes</p>

      {/* Textarea to input and display notes */}
      <textarea
        style={{
          width: "20.8vw",
          height: "44vh",
          margin: "auto",
          border: "none",
          background: "transparent",
          outline: 0,
          fontSize: "1rem",
          fontFamily: "DM Sans",
          fontWeight: "400",
          padding: "10px"
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default AllNotes;
