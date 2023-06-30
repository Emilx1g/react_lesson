import React from "react";
import styles from "./styles";

const Users = ({ users, onUserClick }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.tdAndTh}>ID</th>
          <th style={styles.tdAndTh}>Name</th>
          <th style={styles.tdAndTh}>Surname</th>
          <th style={styles.tdAndTh}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td style={styles.tdAndTh}>{user.id}</td>
            <td style={styles.tdAndTh}>{user.name}</td>
            <td style={styles.tdAndTh}>{user.surname}</td>
            <td style={styles.tdAndTh}>
              <button onClick={() => onUserClick(user.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
