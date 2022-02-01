import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Main page</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/preferences">Preferences</Link> |{" "}
        <Link to="/invoices">Invoices</Link>
      </nav>
    </div>
  );
}
