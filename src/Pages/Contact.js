import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import { useState } from "react";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surName: "",
      email: "",
      message: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form">
        <div>
          <div>
            <label>Name:</label>
          </div>
          <input
            onChange={formik.handleChange("name")}
            name="name"
            type="text"
            placeholder="Burak"
          />
        </div>

        <div>
          <div>
            <label>LastName:</label>
          </div>
          <input
            onChange={formik.handleChange("surName")}
            name="LastName"
            type="text"
            placeholder="Kalaycı"
          />
        </div>
        <div>
          <div>
            <label>E-mail:</label>
          </div>
          <input
            onChange={formik.handleChange("email")}
            name="email"
            type="email"
            placeholder="buraklyci@hotmail.com"
          />
        </div>
        <div>
          <textarea
            onChange={formik.handleChange("message")}
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Talk to me"
            defaultValue={formik.textArea}
          ></textarea>

          <div>
            <button type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;

// function Contact() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     textArea: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <form>
//         <div>
//           <div>
//             <label >Name:</label>
//           </div>
//           <input
//             onChange={handleChange}
//             name="firstName"
//             type="text"
//             placeholder="Burak"
//             defaultValue={form.firstName}
//           />
//         </div>

//         <div>
//           <div>
//             <label >LastName:</label>
//           </div>
//           <input
//             onChange={handleChange}
//             name="LastName"
//             type="text"
//             placeholder="Kalaycı"
//             defaultValue={form.lastName}
//           />
//         </div>
//         <div>
//           <div>
//             <label >E-mail:</label>
//           </div>
//           <input
//             onChange={handleChange}
//             name="email"
//             type="email"
//             placeholder="buraklyci@hotmail.com"
//             defaultValue={form.email}
//           />
//         </div>
//         <div>
//           <textarea
//             onChange={handleChange}
//             name="textArea"
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Talk to me"
//             defaultValue={form.textArea}
//           ></textarea>

//           <div>
//             <button
//               onClick={(e) => {
//                 e.preventDefault();
//                 console.log(form);
//               }}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;
