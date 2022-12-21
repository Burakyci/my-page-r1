import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

function UsersDetail() {
  const [users, setusers] = useState([]);
  const { id } = useParams();

  const idNumber = parseInt(id);
  console.log(idNumber);

  useEffect(() => {
    (async () => {
      const url = `https://jsonplaceholder.typicode.com/users/${idNumber}`;
      const { data } = await axios(url);
      setusers(data);
    })();
  }, [id]);

  return (
    <div>
      {users && <div>{JSON.stringify(users)}</div>}
      <Link to={`/Users/${idNumber + 1}`}>Bir Sonraki User</Link>
      <br />
      <Link to={`/Users/${idNumber - 1}`}>Bir Önceki User</Link>
      <hr />
      <Link to={-1}>Geri Dön</Link>
    </div>
  );
}

export default UsersDetail;
