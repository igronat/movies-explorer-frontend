import React from "react";
import Profile from "../images/profile.svg";
import { Link } from 'react-router-dom';

function Account({ ability }) {
  return (
    <div className={`account account__${ability}`}>
        <Link to="/profile" className="account__link">
      <img src={Profile} className="account__img"></img>
      </Link>
    </div>
  );
}

export default Account;
