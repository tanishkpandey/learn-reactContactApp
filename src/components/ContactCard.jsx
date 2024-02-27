import React from "react";
import Profile from "../images/Profile.jpg";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const handleDeleteContact = () => {
    props.onDelete(id);
  };
  return (
    <div
      className="item"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
        <img className="ui avatar image" src={Profile} alt="user" />

        <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
        </div>
      </div>

      <i
        className="trash alternate outlie icon"
        style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
        onClick={handleDeleteContact}
      ></i>
    </div>
  );
};

export default ContactCard;
