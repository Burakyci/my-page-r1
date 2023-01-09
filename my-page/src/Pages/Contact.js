import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import axios from 'axios';

// TODO: implement yup package for validation

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surName: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        const mailData = {
          data: formik.values
        };

        // formik.validateForm(data)
        // TODO: check validation
        const url = 'localhost:8000/sendmail';
        const res = await axios.post(url, { mailData }, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        });
        if (res.status === 200) {
          alert(res.data);
        } else {
          alert(res.statusText);
        }
        // const res = await fetch(
        //   url,
        //   {
        //     body: JSON.stringify(mailData),
        //     method: "POST",
        //     headers: {
        //       'Content-type': 'application/json; charset=UTF-8',
        //     },
        //   });
        // const json = await res.json();
        // alert(json);
      } catch (error) {
        alert(error);
      }
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label className="m-7" htmlFor="name">
            İsim :
          </label>
          <input
            id="name"
            className="m-7"
            type="text"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label className="m-7" htmlFor="">
            SoyAd :
          </label>
          <input
            id="surName"
            className="m-7"
            type="text"
            placeholder="Surname"
            value={formik.values.surName}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label className="m-7" htmlFor="">
            E-Mail :
          </label>
          <input
            id="email"
            type="text"
            className="m-7"
            placeholder="E-Mail"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <textarea
            id="message"
            className="m-7"
            cols="30"
            rows="10"
            placeholder="Talk to me...."
            value={formik.values.message}
            onChange={formik.handleChange}
          ></textarea>
          <div>
            <button>Send </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;

// function Contact() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       surName: "",
//       email: "",
//       message: "",
//     },

//     onSubmit: (values) => {
//       alert(JSON.stringify(values, 1));
//     },
//   });
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit} className="form">
//         <div>
//           <div>
//             <label>Name:</label>
//           </div>
//           <input
//             onChange={formik.handleChange("name")}
//             name="name"
//             type="text"
//             placeholder="Burak"
//           />
//         </div>

//         <div>
//           <div>
//             <label>LastName:</label>
//           </div>
//           <input
//             onChange={formik.handleChange("surName")}
//             name="LastName"
//             type="text"
//             placeholder="Kalaycı"
//           />
//         </div>
//         <div>
//           <div>
//             <label>E-mail:</label>
//           </div>
//           <input
//             onChange={formik.handleChange("email")}
//             name="email"
//             type="email"
//             placeholder="buraklyci@hotmail.com"
//           />
//         </div>
//         <div>
//           <textarea
//             onChange={formik.handleChange("message")}
//             name="message"
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Talk to me"
//             defaultValue={formik.textArea}
//           ></textarea>

//           <div>
//             <button type="submit">Send</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;

// // function Contact() {
// //   const [form, setForm] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     textArea: "",

// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   return (
// //     <div>
// //       <form>
// //         <div>
// //           <div>
// //             <label >Name:</label>
// //           </div>
// //           <input
// //             onChange={handleChange}
// //             name="firstName"
// //             type="text"
// //             placeholder="Burak"
// //             defaultValue={form.firstName}
// //           />
// //         </div>

// //         <div>
// //           <div>
// //             <label >LastName:</label>
// //           </div>
// //           <input
// //             onChange={handleChange}
// //             name="LastName"
// //             type="text"
// //             placeholder="Kalaycı"
// //             defaultValue={form.lastName}
// //           />
// //         </div>
// //         <div>
// //           <div>
// //             <label >E-mail:</label>
// //           </div>
// //           <input
// //             onChange={handleChange}
// //             name="email"
// //             type="email"
// //             placeholder="buraklyci@hotmail.com"
// //             defaultValue={form.email}
// //           />
// //         </div>
// //         <div>
// //           <textarea
// //             onChange={handleChange}
// //             name="textArea"
// //             id=""
// //             cols="30"
// //             rows="10"
// //             placeholder="Talk to me"
// //             defaultValue={form.textArea}
// //           ></textarea>

// //           <div>
// //             <button
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 console.log(form);
// //               }}
// //             >
// //               Send
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Contact;
