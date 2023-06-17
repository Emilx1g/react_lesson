import button from "../button/button.js";
const styles = {
  td: {
    padding: "10px 20px",
  },
  redColor: {
    color: "red",
  },
};

const getAddress = (user) => {
  return `${user.address.city} | ${user.address.city}`;
};

const User = (props) => {
  const { user } = props;
  console.log(user.website);
  return (
    <>
      <td style={styles.td}>
        <span style={styles.redColor}>{user.name}</span>
      </td>
      <td style={styles.td}>
        <a href={"http://" + user.website} target="_blank">
          {user.website}
        </a>
      </td>
      <td style={styles.td}>{getAddress(user)}</td>
      <td style={styles.td}>{button(user)}</td>
    </>
  );
};

export default User;
