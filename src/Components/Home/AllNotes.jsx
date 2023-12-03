import { useState } from "react";

const AllNotes = () => {
  // State to manage the text content of the textarea, retrieved from local storage
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );

  // Function to handle changes in the textarea and update the state
  const handleChange = (e) => {
    // Update the state with the new text value
    setText(e.target.value);
    // Update the text in local storage using the latest state value
    window.localStorage.setItem("text", JSON.stringify(text));
  };

  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "64.2vh",
        width: "27vw",
        left:"35vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}
    >
      {/* Heading for the notes section */}
      <p style={{ color: "black", fontSize: "2rem" }}>All notes</p>
      
      {/* Textarea to input and display notes */}
      <textarea
        style={{
          width: "10vw",
          height: "50vh",
          margin: "auto",
          border: "none",
          background: "transparent",
          outline: 0,
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default AllNotes;