import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const city = " Lahore"
// const customElement = React.createElement(
//   "a",
//   {
//     href: "https://www.youtube.com",
//   },
//   "CLick Me",
//   city
// );
createRoot(document.getElementById("root")).render(
  <>
    <App />
    {/* , {customElement} */}
  </>
);
