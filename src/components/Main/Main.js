import Users from "../Users/Users.js";
import useMain from "./useMain.js";
import editUser from "../edit user/editUser.js";
const Main = () => {
  const { toggleTable, isShowTable, users } = useMain();
  return (
    <>
      <div>
        <button onClick={toggleTable}>Show Table</button>

        <br />
        <br />

        {isShowTable && <Users users={users} />}
        {<editUser />}
      </div>
    </>
  );
};

export default Main;
