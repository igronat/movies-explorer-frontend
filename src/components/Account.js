import React from "react";
import Profile from "../images/profile.svg";
import { Link } from "react-router-dom";

function Account({setActive}) {
  return (
    <div className="account">
      <Link to="/profile" className="account__link" onClick={setActive}>
        <img src={Profile} className="account__img"></img>
      </Link>
    </div>
  );
}

export default Account;
