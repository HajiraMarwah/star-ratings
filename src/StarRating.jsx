import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const resetRating = () => {
    setRating(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Stars */}
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            fontSize: "40px",
            cursor: "pointer",
            color: index < rating ? "#FFD700" : "#cccccc"
          }}
        >
          ★
        </span>
      ))}

      {/* Reset Button */}
      <div>
        <button
          onClick={resetRating}
          style={{
            marginTop: "15px",
            padding: "8px 16px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Reset Rating
        </button>
      </div>

      {/* Current Rating */}
      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        Current Rating: {rating}
      </p>
    </div>
  );
}

export default StarRating;
