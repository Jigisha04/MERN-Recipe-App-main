import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="navbar">
            {!cookies.access_token ? (
        <Link to="/">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
      <Link to="/home">Home</Link>
      <Link to="/create-recipe">Create Recipe</Link>
      <Link to="/saved-recipes">Saved Recipes</Link>
    </div>
  );
};