import React, { useContext } from "react";
import { useFormik } from "formik";
import { AuthContext } from "../../Context/AuthContext";
import { async } from "@firebase/util";

function UpdateProfil() {
  const { loginState, setLoginState, AuthService, user } =
    useContext(AuthContext);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const name = "burak";
  //   const url =
  //     "https://i.pinimg.com/236x/77/fc/4f/77fc4fe367d9e8da9aed05b07aaf7e1d.jpg";
  //   const email = "update@update.com";
  //   await AuthService.updateProfil(name, url, email);
  //   console.log(user);
  // };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      photo: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      const name = values.name;
      const url = values.photo;
      await AuthService.updateProfil(name, url);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              className="m-7"
              onChange={formik.handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              name="email"
              value={formik.values.email}
              className="m-7"
              onChange={formik.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="photo">
            <input
              id="photo"
              type="text"
              placeholder="Photo"
              name="photo"
              className="m-7"
              value={formik.values.photo}
              onChange={formik.handleChange}
            />
          </label>
        </div>

        <div>
          <button className="m-7">Update</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfil;
