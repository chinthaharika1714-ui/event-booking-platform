import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Event Booking Platform
      </div>

      <div
        style={{
          backgroundColor: "#222",
          textAlign: "center",
          padding: "15px",
        }}
      >
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/login">
          Login
        </Link>

        <Link className="nav-link" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;