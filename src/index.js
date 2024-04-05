import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Card from "./Card";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <Card fullName={"Robot 1"} email={"adfad@adfgad.com"}></Card>

      <Card fullName={"Robot 2"} email={"adfad@adfgad.com"}></Card>

      <Card fullName={"Robot 3"} email={"adfad@adfgad.com"}></Card>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
