import React from "react";
import profileImg from "./DropdownAssets/profile.png";
import supportImg from "./DropdownAssets/support.png";
import feedbackImg from "./DropdownAssets/feedback.png";
import logoutImg from "./DropdownAssets/logout.png";
import { Link } from "react-router-dom";
import "./dashboard.scss";

function DropdownData() {
  return (
    <>
      <Link className="DropdownContent" key="Profile" to="/profile">
        <img src={profileImg} alt="img" />
        <h1>Profile</h1>
      </Link>

      <Link className="DropdownContent" key="Feedback" to="/feedback">
        <img src={feedbackImg} alt="img" />
        <h1>Feedback</h1>
      </Link>

      <Link className="DropdownContent" key="Support" to="/support">
        <img src={supportImg} alt="img" />
        <h1>Support</h1>
      </Link>

      <Link
        className="DropdownContent"
        key="Logout"
        onClick={() => {
<<<<<<< HEAD
          window.location.href = "https://mernmaid.herokuapp.com//logout";
        }}
      >
        <img src={logoutImg} alt="img" />
        <h1>Logout</h1>
=======
        window.location.href = 'https://mernmaid.herokuapp.com/logout'
      }}>
          <img src={logoutImg} alt='img' />
          <h1>Logout</h1>
>>>>>>> bd2271b0b7e10183407cab30728829e208f1c0db
      </Link>
    </>
  );
}

export default DropdownData;
