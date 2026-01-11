import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

function Test() {
  return (
    <div>
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Great"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      className="test"
      defaultRating={3}
    /> */}
    <Test />
  </React.StrictMode>
);
