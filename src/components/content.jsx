import React from "react";
import './Content.css';
import { userContext } from "../context/context";
import { useContext } from "react";
import UserCard from "./UserCard";

function Content() {
  const { users } = useContext(userContext);

  return (
    <>
        <h2>Users List</h2>
        <div className="content">
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
    </>
    
  );
}

export default Content;