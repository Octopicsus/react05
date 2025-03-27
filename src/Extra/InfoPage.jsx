import React from "react";
import { Link, Outlet, useNavigate } from "react-router";

export default function InfoPage() {
  const navigate = useNavigate();

  const handleRedirectButton = () => {
    navigate("/");
  };

  return (
    <div>
      <main>
        Info Content
        <ul>
          <li>
            <Link to="/info/details">Details</Link>
          </li>
          <li>
            <Link to="/info/contacts">Contacts</Link>
          </li>
        </ul>
        <button onClick={handleRedirectButton}>Go Home</button>
        <Outlet />
      </main>
    </div>
  );
}
