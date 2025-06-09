import React from "react";
import './UserCard.css';

function UserCard({ user }) {
  return (
    <div className="user-card">
        <img
            className="user-avatar"
            src={user.image || "https://via.placeholder.com/150"}
            alt={`${user.firstName} ${user.lastName}`} />
      <h3 className="user-name">{user.firstName} {user.lastName}</h3>
      <p className="user-id">ID: {user.id}</p>
      <p className="user-username">Sex: {user.gender}</p>
      {/* <p className="user-email">{user.email}</p>
      <p className="user-phone">{user.phone}</p>
      <p className="user-address">{user.address}</p> */}
    </div>
  );
}

export default UserCard;