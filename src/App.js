import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

function App({ values, handleChange }) {
  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  }
})(App);
