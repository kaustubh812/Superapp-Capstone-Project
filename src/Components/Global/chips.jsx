// Chips component for displaying and managing selected categories as chips
const Chips = ({ color, id, setCategories, categories }) => {
  // Function to handle the click on a chip and remove the corresponding category

  const handleClick = (clickedCategory) => {
    // Remove the clicked category from the list of selected categories
    setCategories(categories.filter(category => category !== clickedCategory));
  };
  // Render the chips component
  return (
    <div style={{ width: "40vw" }}>
      {/* Map through selected categories and render a button for each as a chip */}
      {categories.map(category => (
        <button
          key={category}
          style={{
            // Styling for the chip, including background color, border, and margin
            background: color,
            borderRadius: "20px",
            width: "100px",
            color: "white",
            textAlign: "center",
            fontSize: "17px",
            border: "none",
            padding: "6px",
            height: "40px",
            flexShrink: 0,
            margin: "10px",
          }}
          // Handle click on the chip to remove the corresponding category
          onClick={() => handleClick(category)}
        >
          {/* Display category name and a close (X) icon */}
          {category} <span style={{ color: "black", marginLeft: "4px" }}>X</span>
        </button>
      ))}
    </div>
  );
};

export default Chips;
