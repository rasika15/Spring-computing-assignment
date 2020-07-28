import React from "react";
import { Table } from "react-bootstrap";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state);

  return (
    <>
      <div>
        <Link className="btn btn-info" to="/add_users">
          Add Users
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user,i) => (
            <UserItem key={user.id} id={i} data={user}></UserItem>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
