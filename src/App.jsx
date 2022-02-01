import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Login from './components/Login/Login';
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


export default function App() {
  const { token, setToken } = useToken();

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
