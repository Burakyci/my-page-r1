import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const { theme, setTheme, users, setUsers } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      const { data } = await axios(url);
      setUsers(data);
    })();
  }, []);

  return (
    <div>
      Users
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;
