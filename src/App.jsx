import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Login from './components/Login/Login';

export default function App() {
  const [token, setToken] = useState();

  if(!token) {
      return <Login setToken={setToken} />
  }

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
