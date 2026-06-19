import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  const increaseLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>👍 Like Counter</h1>

      <h1>Likes: {likes}</h1>

      <button
        onClick={increaseLikes}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Like ❤️
      </button>
    </div>
  );
}

export default App;