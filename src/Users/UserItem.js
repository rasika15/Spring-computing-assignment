import React from "react";

const UserItem = ({ id,data }) => {
  return (
    <tr>
          <td>{id}</td>          
          <td>{data.name}</td>
          <td>{data.email}</td>
      <td>{data.address}</td>
      <td>{data.phone}</td>
    </tr>
  );
};

export default UserItem;
