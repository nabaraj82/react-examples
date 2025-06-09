// App.jsx
import React from "react";
import StarRating from "./components/StarRating";

function App() {
  const [rating, setRating] = React.useState(0);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Rate this experience:</h2>
      <StarRating rating={rating} onChange={setRating} />
      {rating > 0 && <p>You rated: {rating} star(s)</p>}
    </div>
  );
}

export default App;
